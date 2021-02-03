import { useCallback, useEffect, useState } from 'react';

import { isEqual } from 'date-fns';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { Save } from '@eventespresso/icons';
import { usePrevious } from '@eventespresso/hooks';
import {
	add,
	diff,
	DateTimeRangePicker as DateTimeRangePickerAdapter,
	DateRangePickerProps,
	endDateAfterStartDateErrorMessage,
	startDateBeforeEndDateErrorMessage,
	useDatePickerValidation,
} from '@eventespresso/dates';

import { Button, ButtonType, ErrorMessage, InfoMessage } from '../';

import './styles.scss';

export interface DateTimeRangePickerProps extends DateRangePickerProps {
	dateAjustedMessage?: string;
	enforceDatesInOrder?: boolean;
	TimezoneTimeInfo?: React.ComponentType<{ date: Date }>;
}

export const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
	dateAjustedMessage,
	enforceDatesInOrder,
	onChange,
	value,
	locale,
	TimezoneTimeInfo,
	...props
}) => {
	const [dates, setDates] = useState(value);
	const [computedEndDate, setComputedEndDate] = useState<Date>(null);
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

	const previousDates = usePrevious(dates);
	useEffect(() => {
		const [startDate] = dates;
		const startDateChanged = previousDates?.[0] && previousDates?.[0] !== startDate;

		if (startDateChanged) {
			setComputedEndDate(null);
		}

		if (enforceDatesInOrder && startDateChanged && !startDateBeforeEndDate) {
			const [previousStartDate, previousEndDate] = previousDates;
			// calculate the difference between previous start and end date in minutes.
			const difference = diff('minutes', previousEndDate, previousStartDate);
			// add the difference to end date
			const newEndDate = add('minutes', startDate, difference);

			setDates([startDate, newEndDate]);
			setComputedEndDate(newEndDate);
		}
	}, [dates, enforceDatesInOrder, hasEndDateChanged, hasStartDateChanged, previousDates, startDateBeforeEndDate]);

	// if the current and computed end dates are same
	const endDateAjusted = computedEndDate === dates[1];

	return (
		<div className={className}>
			<DateTimeRangePickerAdapter
				{...props}
				endDateTZ={endDateTZ}
				limitEndByStart={enforceDatesInOrder}
				locale={locale}
				onChange={setDates}
				required
				startDateTZ={startDateTZ}
				value={dates}
			/>

			{endDateAjusted && dateAjustedMessage && <InfoMessage message={dateAjustedMessage} />}

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
