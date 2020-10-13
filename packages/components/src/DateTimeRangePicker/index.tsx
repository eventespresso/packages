import React, { useCallback, useState } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { DateTimeRangePicker as DateTimeRangePickerAdapter } from '@eventespresso/dates';
import type { DateRangePickerProps } from '@eventespresso/dates';
import { Save } from '@eventespresso/icons';
import { useConfig } from '@eventespresso/services';

import { Button, ButtonType, TimezoneTimeInfo } from '../';

import './styles.scss';

export const DateTimeRangePicker: React.FC<DateRangePickerProps> = ({ onChange, value, ...props }) => {
	const [dates, setDates] = useState(value);
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

	const startDateTZ = <TimezoneTimeInfo date={dates[0]} />;
	const endDateTZ = <TimezoneTimeInfo date={dates[1]} />;

	return (
		<div className={className}>
			<DateTimeRangePickerAdapter
				endDateTZ={endDateTZ}
				locale={user}
				onChange={setDates}
				required
				startDateTZ={startDateTZ}
				value={dates}
				{...props}
			/>

			<Button
				aria-label={__('save')}
				buttonText={__('save')}
				buttonType={ButtonType.PRIMARY}
				icon={Save}
				noMargin
				onClick={onSave}
			/>
		</div>
	);
};
