import { formatISO, parseISO } from 'date-fns';
import { __ } from '@eventespresso/i18n';
import * as yup from 'yup';

export const dateErrorMessage = (): string => __('End Date & Time must be set later than the Start Date & Time');
export const requiredMessage = (): string => __('Required');

export const datesSchema = {
	startDate: yup
		.date()
		.required(() => __('Start Date is required'))
		.typeError(requiredMessage),
	endDate: yup
		.date()
		.required(() => __('End Date is required'))
		.typeError(requiredMessage)
		.when(['startDate'], (startDate: Date, schema: yup.DateSchema) => {
			return schema.min(startDate, dateErrorMessage);
		}),
};

export const now = parseISO(formatISO(new Date()));
