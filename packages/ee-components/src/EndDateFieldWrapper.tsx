import { FormSpy, FieldWrapperProps } from '@eventespresso/form';
import { setTimeToJustBeforeZeroHour, isOnOrBeforeDate } from '@eventespresso/dates';

// for 'react-datepicker`, if you specify minTime, you have to specify maxTime as well ¯\_(ツ)_/¯
// So lets make a fool of it.
const maxTime = setTimeToJustBeforeZeroHour(new Date());

const subscription = { values: true };
export const EndDateFieldWrapper: React.FC<FieldWrapperProps> = ({ fieldType, component: Component, ...props }) => {
	return (
		<FormSpy subscription={subscription}>
			{({ values }) => {
				const startDate = values.startDate;
				const endDate = props.input.value;

				// if start and end dates are on the same day of the month
				const isOnSameDay = isOnOrBeforeDate(endDate, startDate, false);
				return (
					<Component
						// just to avoid `fieldType` going to DOM
						data-type={fieldType}
						{...props}
						minDate={values.startDate}
						// add time restrictions only if the day is same as startDate
						minTime={isOnSameDay && startDate}
						maxTime={isOnSameDay && maxTime}
					/>
				);
			}}
		</FormSpy>
	);
};
