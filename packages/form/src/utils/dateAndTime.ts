import * as yup from 'yup';

import { __ } from '@eventespresso/i18n';
import { endDateAfterStartDateErrorMessage } from '@eventespresso/dates';

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
