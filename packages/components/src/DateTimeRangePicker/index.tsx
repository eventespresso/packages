import React, { useCallback, useState } from 'react';
import { isEqual } from 'date-fns';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import {
	DateTimeRangePicker as DateTimeRangePickerAdapter,
	DateRangePickerProps,
	endDateAfterStartDateErrorMessage,
	startDateBeforeEndDateErrorMessage,
	useDatePickerValidation,
} from '@eventespresso/dates';
import { Save } from '@eventespresso/icons';
import { useConfig } from '@eventespresso/services';

import { Button, ButtonType, ErrorMessage, TimezoneTimeInfo } from '../';

import './styles.scss';

export const DateTimeRangePicker: React.FC<DateRangePickerProps> = ({ onChange, value, ...props }) => {
	const [dates, setDates] = useState(value);
	const { startDateIsValid, startDateBeforeEndDate, endDateIsValid, endDateAfterStartDate } = useDatePickerValidation(
		dates[0],
		dates[1],
		true
	);
	const {
		locale: { user },
	} = useConfig();

	const onSave: VoidFunction = useCallback(() => {
		onChange?.(dates);
	}, [dates, onChange]);

	const className = classNames(
		props.className,
		'ee-date-time-range-picker',
		'ee-calendar-datetime-picker',
		'ee-input-base-wrapper'
	);

	const isDisabled = !startDateIsValid || !endDateIsValid;

	const startDateTZ = <TimezoneTimeInfo date={dates[0]} />;

	const endDateTZ = <TimezoneTimeInfo date={dates[1]} />;

	const hasStartDateChanged = !isEqual(value[0], dates[0]);

	const hasEndDateChanged = !isEqual(value[1], dates[1]);

	return (
		<div className={className}>
			<DateTimeRangePickerAdapter
				{...props}
				endDateTZ={endDateTZ}
				locale={user}
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
