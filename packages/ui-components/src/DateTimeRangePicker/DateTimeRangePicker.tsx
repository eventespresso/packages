import { useCallback, useState } from 'react';

import { isEqual } from 'date-fns';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { Save } from '@eventespresso/icons';
import {
	DateTimeRangePicker as DateTimeRangePickerAdapter,
	DateRangePickerProps,
	endDateAfterStartDateErrorMessage,
	startDateBeforeEndDateErrorMessage,
	useDatePickerValidation,
} from '@eventespresso/dates';

import { Button, ButtonType, ErrorMessage } from '../';

import './styles.scss';

export interface DateTimeRangePickerProps extends DateRangePickerProps {
	TimezoneTimeInfo?: React.ComponentType<{ date: Date }>;
}

export const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
	onChange,
	value,
	locale,
	TimezoneTimeInfo,
	...props
}) => {
	const [dates, setDates] = useState(value);
	const { startDateBeforeEndDate, endDateAfterStartDate } = useDatePickerValidation(dates[0], dates[1], true);

	const onSave: VoidFunction = useCallback(() => {
		onChange?.(dates);
	}, [dates, onChange]);

	const className = classNames(
		'ee-date-time-range-picker',
		'ee-calendar-datetime-picker',
		'ee-input-base-wrapper',
		props.className
	);

	const isDisabled = !startDateBeforeEndDate || !endDateAfterStartDate;

	const startDateTZ = TimezoneTimeInfo && <TimezoneTimeInfo date={dates[0]} />;

	const endDateTZ = TimezoneTimeInfo && <TimezoneTimeInfo date={dates[1]} />;

	const hasStartDateChanged = !isEqual(value[0], dates[0]);

	const hasEndDateChanged = !isEqual(value[1], dates[1]);

	return (
		<div className={className}>
			<DateTimeRangePickerAdapter
				{...props}
				endDateTZ={endDateTZ}
				locale={locale}
				onChange={setDates}
				required
				startDateTZ={startDateTZ}
				value={dates}
			/>

			{hasStartDateChanged && !startDateBeforeEndDate && (
				<ErrorMessage message={startDateBeforeEndDateErrorMessage} />
			)}

			{hasEndDateChanged && !endDateAfterStartDate && (
				<ErrorMessage message={endDateAfterStartDateErrorMessage} />
			)}

			<Button
				aria-label={__('save')}
				buttonText={__('save')}
				buttonType={ButtonType.PRIMARY}
				icon={Save}
				isDisabled={isDisabled}
				noMargin
				onClick={onSave}
			/>
		</div>
	);
};
