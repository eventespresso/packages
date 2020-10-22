import { formatISO, parseISO } from 'date-fns';
import * as yup from 'yup';

import { endDateAfterStartDateErrorMessage } from '@eventespresso/dates';
import { __ } from '@eventespresso/i18n';

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
			return schema.min(startDate, () => endDateAfterStartDateErrorMessage);
		}),
};

export const now = parseISO(formatISO(new Date()));
