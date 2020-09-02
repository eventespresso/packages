import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';

import { DateTimeRangePicker as DateTimeRangePickerAdapter, DateRangePickerProps } from '@eventespresso/dates';
import { Save } from '@eventespresso/icons';
import { useConfig } from '@eventespresso/services';
import { IconButton, ButtonType } from '../Button';

import './styles.scss';

export const DateTimeRangePicker: React.FC<DateRangePickerProps> = ({ className, onChange, value, ...props }) => {
	const [dates, setDates] = useState(value);
	const {
		locale: { user },
	} = useConfig();

	const onSave: VoidFunction = useCallback(() => {
		onChange?.(dates);
	}, [dates, onChange]);

	const htmlClass = classNames(
		className,
		'ee-date-time-range-picker',
		'ee-calendar-datetime-picker',
		'ee-input-base-wrapper'
	);

	return (
		<div className={htmlClass}>
			<DateTimeRangePickerAdapter required locale={user} onChange={setDates} value={dates} {...props} />
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
