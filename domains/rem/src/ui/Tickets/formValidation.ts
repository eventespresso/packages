import { __ } from '@wordpress/i18n';
import * as yup from 'yup';

import { yupToFinalFormErrors } from '@eventespresso/form';
import { IntervalType } from '@eventespresso/services';
import { transformTimeByDate, dateErrorMessage } from '@eventespresso/edtr-services';
import { DateAndTime } from './types';
import { RemTicket } from '../../data';

export const validate = async (values: RemTicket): Promise<any> => {
	return await yupToFinalFormErrors(validationSchema, values);
};

const requiredMessage = () => __('Required');

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

const dateTimeShape = {
	// make date and time required
	date: yup.date().required(requiredMessage).typeError(requiredMessage),
	time: yup.date().required(requiredMessage).typeError(requiredMessage).when(
		// we need to transform time to make sure that
		// year, month and date are same as that of date
		'date',
		transformTimeByDate
	),
};

const dateTimeSchema = yup.object<DateAndTime>().when(
	'isShared',
	// make it required when `isShared` is true
	requiredWhenIsSharedEquals(true, dateTimeShape)
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

const validationSchema = yup.object<Partial<RemTicket>>({
	name: yup
		.string()
		.required(() => __('Name is required'))
		.min(3, () => __('Name must be at least three characters')),
	ticketSalesStart: ticketSalesSchema,
	ticketSalesEnd: ticketSalesSchema,
	dateTimeStart: dateTimeSchema,
	dateTimeEnd: dateTimeSchema.when(
		['dateTimeStart'], // validate end dates based on start dates
		(dateTimeStart: DateAndTime, schema: yup.ObjectSchema<DateAndTime>): yup.ObjectSchema<DateAndTime> => {
			// if we have a start date
			if (dateTimeStart?.date) {
				// set the minimum value for end dates to be those of start dates.
				// it's assumed that transformation of times has already been done
				// to make sure that year, month and date is compared correctly for time inputs
				return schema.shape<DateAndTime>({
					date: dateTimeShape.date.min(dateTimeStart?.date, dateErrorMessage),
					time: dateTimeShape.time.min(dateTimeStart?.time, dateErrorMessage),
				});
			}
			return schema;
		}
	),
});
