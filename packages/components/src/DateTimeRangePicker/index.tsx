import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';

import { DateTimeRangePicker as DateTimeRangePickerAdapter, DateTimeRangePickerProps } from '@eventespresso/adapters';
import { Save } from '@eventespresso/icons';
import { useConfig } from '@eventespresso/services';
import { IconButton, ButtonType } from '../Button';

const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
	className,
	startDate,
	endDate,
	onChange,
	onChangeValue,
	...props
}) => {
	const [dates, setDates] = useState([startDate, endDate]);
	const {
		dateTimeFormats: { dateTimeFormat },
		locale: { user },
	} = useConfig();

	const onSave: VoidFunction = useCallback(() => {
		if (typeof onChangeValue === 'function') {
			onChangeValue(dates);
		}

		if (typeof onChange === 'function') {
			onChange(dates);
		}
	}, [dates, onChange, onChangeValue]);

	const htmlClass = classNames(
		className,
		'ee-date-time-range-picker',
		'ee-calendar-datetime-picker',
		'ee-input-base-wrapper'
	);

	const [start, end] = dates;

	return (
		<div className={htmlClass}>
			<DateTimeRangePickerAdapter
				required
				dateFormat={dateTimeFormat}
				locale={user}
				onChange={setDates}
				startDate={start}
				endDate={end}
				{...props}
			/>
			<IconButton
				aria-label={__('save')}
				buttonType={ButtonType.MINIMAL}
				className={'ee-date-time-range-picker-submit'}
				icon={Save}
				onClick={onSave}
			/>
		</div>
	);
};

export default DateTimeRangePicker;
