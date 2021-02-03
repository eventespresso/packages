import * as yup from 'yup';

import { add, diff, endDateAfterStartDateErrorMessage } from '@eventespresso/dates';
import { __ } from '@eventespresso/i18n';
import { Decorator } from '@eventespresso/form';

export const startAndEndDateFixer: Decorator<any, any> = (form) => {
	let previousValues: any = {};

	const unsubscribe = form.subscribe(
		({ values }) => {
			form.batch(() => {
				const { endDate, startDate } = values;

				const previousStartDate = previousValues.startDate;
				const previousEndDate = previousValues.endDate;

				const startDateChanged = startDate !== previousStartDate;
				const endDateChanged = endDate !== previousEndDate;

				const isStartDateAfterEndDate = startDate > endDate;

				const isEndDateNotPristine = !form.getFieldState('endDate')?.pristine;
				const changedFromStartDate = form.getFieldState('endDate')?.data?.changedFromStartDate;

				if (startDateChanged) {
					// there should be no notice unless things are not in order
					let endDateFieldNotice: string;

					if (isStartDateAfterEndDate) {
						// calculate the difference between previous start and end date in minutes
						const difference = diff('minutes', previousEndDate, previousStartDate);
						// add the difference to end date
						const newEndDate = add('minutes', startDate, difference);
						form.change('endDate', newEndDate);
						form.mutators.setFieldData('endDate', { changedFromStartDate: true });
						endDateFieldNotice = __('End date has been adusted');
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
