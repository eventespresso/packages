import * as yup from 'yup';

import { add, endDateAfterStartDateErrorMessage, sub } from '@eventespresso/dates';
import { __ } from '@eventespresso/i18n';
import { Decorator } from '@eventespresso/form';

export const startAndEndDateFixer: Decorator<any, any> = (form) => {
	let previousValues: any = {};
	const unsubscribe = form.subscribe(
		({ values }) => {
			form.batch(() => {
				const startDateChanged = values.startDate !== previousValues.startDate;
				if (startDateChanged) {
					// there should be no notice unless things are not in order
					let endDateFieldNotice: string;
					const isStartDateAfterEndDate = values.startDate > values.endDate;

					if (isStartDateAfterEndDate) {
						// set end date 1 hour after start date
						const endDate = add('hours', values.startDate, 1);
						form.change('endDate', endDate);
						endDateFieldNotice = __('End date has been set one hour after start date');
					}
					form.mutators.setFieldData('endDate', { fieldNotice: endDateFieldNotice });
				}

				const endDateChanged = values.endDate !== previousValues.endDate;
				if (endDateChanged) {
					let startDateFieldNotice: string;
					const isEndDateBeforeStartDate = values.endDate < values.startDate;

					if (isEndDateBeforeStartDate) {
						const startDate = sub('hours', values.endDate, 1);
						form.change('startDate', startDate);
						startDateFieldNotice = __('Start date has been set one hour before end date');
					}
					form.mutators.setFieldData('startDate', { fieldNotice: startDateFieldNotice });
				}
			});
			previousValues = values;
		},
		{ values: true }
	);
	return unsubscribe;
};

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
