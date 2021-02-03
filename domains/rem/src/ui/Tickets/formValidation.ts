import * as yup from 'yup';

import { __ } from '@eventespresso/i18n';
import { yupToFinalFormErrors } from '@eventespresso/form';
import { IntervalType } from '@eventespresso/dates';
import { datesSchema, requiredMessage } from '@eventespresso/edtr-services';

import { RemTicket } from '../../data';

export const validate = async (values: RemTicket): Promise<any> => {
	return await yupToFinalFormErrors(validationSchema, values);
};

/**
 * switches required schema based on the value of isShared
 */
const requiredWhenIsSharedEquals = (isSharedEquals: boolean, objectShape: Record<string, yup.BaseSchema>) => {
	return (isShared: boolean, schema: yup.BaseSchema) => {
		// if isShared equals the expected value
		if (isShared === isSharedEquals) {
			// make the field required and set its shape
			return schema.required(requiredMessage).shape(objectShape);
		}
		// otherwise return the actual schema
		return schema;
	};
};

const salesDatesSchema = yup.object().when(
	'isShared',
	// make it required when `isShared` is true
	requiredWhenIsSharedEquals(true, datesSchema)
);

const ticketSalesSchema = yup.object().when(
	'isShared',
	// make it required when `isShared` is fase
	requiredWhenIsSharedEquals(false, {
		unitValue: yup.number().required(requiredMessage),
		unit: yup
			.string()
			.oneOf<IntervalType>(['months', 'weeks', 'days', 'hours', 'minutes'])
			.required(requiredMessage),
		position: yup.string().oneOf(['before', 'after']).required(requiredMessage),
		startOrEnd: yup.string().oneOf(['start', 'end']).required(requiredMessage),
	})
);

const validationSchema = yup.object({
	name: yup
		.string()
		.required(() => __('Name is required'))
		.min(3, () => __('Name must be at least three characters')),
	ticketSalesStart: ticketSalesSchema,
	ticketSalesEnd: ticketSalesSchema,
	ticketSalesDates: salesDatesSchema,
});
