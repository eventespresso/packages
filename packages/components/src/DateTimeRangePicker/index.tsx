import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';

import { DateTimeRangePicker as DateTimeRangePickerAdapter, DateTimeRangePickerProps } from '@eventespresso/adapters';
import { Save } from '@eventespresso/icons';
import { useConfig } from '@eventespresso/services';
import { IconButton, ButtonType } from '../Button';

export const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
	className,
	onChange,
	onChangeValue,
	value,
	...props
}) => {
	const [dates, setDates] = useState(value);
	const {
		dateTimeFormats: { dateTimeFormat },
		locale: { user },
	} = useConfig();

	const onSave: VoidFunction = useCallback(() => {
		onChangeValue?.(dates);
		onChange?.(dates);
	}, [dates, onChange, onChangeValue]);

	const htmlClass = classNames(
		className,
		'ee-date-time-range-picker',
		'ee-calendar-datetime-picker',
		'ee-input-base-wrapper'
	);

	return (
		<div className={htmlClass}>
			<DateTimeRangePickerAdapter
				required
				dateFormat={dateTimeFormat}
				locale={user}
				onChange={setDates}
				value={dates}
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
