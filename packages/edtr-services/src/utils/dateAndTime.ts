import * as yup from 'yup';

import { endDateAfterStartDateErrorMessage, mayBeAdjustEndDate } from '@eventespresso/dates';
import { __ } from '@eventespresso/i18n';
import { Decorator } from '@eventespresso/form';

export const startAndEndDateFixer: Decorator<any, any> = (form) => {
	let previousValues: any = {};

	const unsubscribe = form.subscribe(
		({ values }) => {
			form.batch(() => {
				const { endDate, startDate } = values;

				const prevStartDate = previousValues.startDate;
				const prevEndDate = previousValues.endDate;

				const startDateChanged = startDate !== prevStartDate;
				const endDateChanged = endDate !== prevEndDate;

				const isEndDateNotPristine = !form.getFieldState('endDate')?.pristine;
				const changedFromStartDate = form.getFieldState('endDate')?.data?.changedFromStartDate;

				if (startDateChanged) {
					// there should be no notice unless things are not in order
					let endDateFieldNotice: string;

					const newEndDate = mayBeAdjustEndDate({
						newEndDate: endDate,
						newStartDate: startDate,
						prevEndDate,
						prevStartDate,
					});
					// if end date has been adjusted
					if (newEndDate !== endDate) {
						form.change('endDate', newEndDate);
						form.mutators.setFieldData('endDate', { changedFromStartDate: true });
						endDateFieldNotice = __('End date has been adjusted');
					}

					form.mutators.setFieldData('endDate', { fieldNotice: endDateFieldNotice });
				}

				if (endDateChanged) {
					if (isEndDateNotPristine && !changedFromStartDate) {
						form.mutators.setFieldData('endDate', { fieldNotice: null });
					}

					form.mutators.setFieldData('endDate', { changedFromStartDate: false });
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
