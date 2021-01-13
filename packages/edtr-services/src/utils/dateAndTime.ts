import * as yup from 'yup';

import { add, endDateAfterStartDateErrorMessage, sub } from '@eventespresso/dates';
import { __ } from '@eventespresso/i18n';
import { Decorator, useField } from '@eventespresso/form';

export const startAndEndDateFixer: Decorator<any, any> = (form) => {
	let previousValues: any = {};

	const unsubscribe = form.subscribe(
		(state) => {
			const {
				meta: { pristine },
			} = useField('endDate', { subscription: { pristine: true } });

			form.batch(() => {
				const startDateChanged = state.values.startDate !== previousValues.startDate;
				const endDateChanged = state.values.endDate !== previousValues.endDate;

				const isStartDateAfterEndDate = state.values.startDate > state.values.endDate;
				const isEndDateBeforeStartDate = state.values.endDate < state.values.startDate;

				console.log(pristine);

				if (startDateChanged) {
					// there should be no notice unless things are not in order
					let endDateFieldNotice: string;

					if (isStartDateAfterEndDate) {
						// set end date 1 hour after start date
						const endDate = add('hours', state.values.startDate, 1);
						form.change('endDate', endDate);
						endDateFieldNotice = __('End date has been set one hour after start date');
					}

					form.mutators.setFieldData('endDate', { fieldNotice: endDateFieldNotice });
				}

				if (endDateChanged) {
					let startDateFieldNotice: string;

					if (isEndDateBeforeStartDate) {
						const startDate = sub('hours', state.values.endDate, 1);
						form.change('startDate', startDate);
						startDateFieldNotice = __('Start date has been set one hour before end date');
					} else {
						// form.mutators.setFieldData('endDate', { fieldNotice: null });
					}

					form.mutators.setFieldData('startDate', { fieldNotice: startDateFieldNotice });
				}
			});
			previousValues = state.values;
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
