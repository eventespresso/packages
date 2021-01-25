import * as yup from 'yup';

import { __ } from '@eventespresso/i18n';
import { add, endDateAfterStartDateErrorMessage, sub } from '@eventespresso/dates';
import type { Decorator } from '@eventespresso/form';

export const startAndEndDateFixer: Decorator<any, any> = (form) => {
	let previousValues: any = {};

	const unsubscribe = form.subscribe(
		({ values }) => {
			form.batch(() => {
				const { endDate, startDate } = values;
				const startDateChanged = startDate !== previousValues.startDate;
				const endDateChanged = endDate !== previousValues.endDate;

				const isStartDateAfterEndDate = startDate > endDate;
				const isEndDateBeforeStartDate = endDate < startDate;

				const isEndDateNotPristine = !form.getFieldState('endDate')?.pristine;
				const changedFromStartDate = form.getFieldState('endDate')?.data?.changedFromStartDate;

				if (startDateChanged) {
					// there should be no notice unless things are not in order
					let endDateFieldNotice: string;

					if (isStartDateAfterEndDate) {
						// set end date 1 hour after start date
						const endDate = add('hours', startDate, 1);
						form.change('endDate', endDate);
						form.mutators.setFieldData('endDate', { changedFromStartDate: true });
						endDateFieldNotice = __('End date has been set one hour after start date');
					}

					form.mutators.setFieldData('endDate', { fieldNotice: endDateFieldNotice });
				}

				if (endDateChanged) {
					let startDateFieldNotice: string;

					if (isEndDateBeforeStartDate) {
						const startDate = sub('hours', endDate, 1);
						form.change('startDate', startDate);
						startDateFieldNotice = __('Start date has been set one hour before end date');
					}

					if (isEndDateNotPristine && !changedFromStartDate) {
						form.mutators.setFieldData('endDate', { fieldNotice: null });
					}

					form.mutators.setFieldData('endDate', { changedFromStartDate: false });
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
