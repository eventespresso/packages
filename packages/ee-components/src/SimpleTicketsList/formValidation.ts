import { __ } from '@eventespresso/i18n';
import * as yup from 'yup';

import { yupToFinalFormErrors } from '@eventespresso/form';
import { datesSchema, requiredMessage, IntervalType, SalesDates } from '@eventespresso/dates';
import type { Entity } from '@eventespresso/data';
import type { AnyObject } from '@eventespresso/utils';

export const validate = async <E extends Entity>(values: E): Promise<any> => {
	return await yupToFinalFormErrors(validationSchema, values);
};

/**
 * switches required schema based on the value of isShared
 */
const requiredWhenIsSharedEquals = <T extends any>(
	isSharedEquals: boolean,
	objectShape: yup.ObjectSchemaDefinition<yup.ObjectSchema['shape']>
): yup.WhenOptionsBuilderFunction<T> => {
	return ((isShared: boolean, schema: yup.ObjectSchema) => {
		// if isShared equals the expected value
		if (isShared === isSharedEquals) {
			// make the field required and set its shape
			return schema.required(requiredMessage).shape(objectShape);
		}
		// otherwise return the actual schema
		return schema;
	}) as yup.WhenOptionsBuilderFunction<T>;
};

const salesDatesSchema = yup.object<SalesDates>().when(
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

const validationSchema = yup.object<AnyObject>({
	name: yup
		.string()
		.required(() => __('Name is required'))
		.min(3, () => __('Name must be at least three characters')),
	ticketSalesStart: ticketSalesSchema,
	ticketSalesEnd: ticketSalesSchema,
	ticketSalesDates: salesDatesSchema,
});
