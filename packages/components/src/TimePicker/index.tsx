import React from 'react';
import classNames from 'classnames';
import { TimePicker as TimePickerAdapter } from '@eventespresso/adapters';
import { TimezoneTimeInfo } from '../../';
import type { TimePickerProps } from '@eventespresso/adapters';

import './style.scss';

export const TimePicker: React.FC<TimePickerProps> = ({ onChange, onChangeValue, value, ...props }) => {
	const className = classNames(
		props.className,
		'ee-time-picker',
		'ee-calendar-datetime-picker',
		'ee-input-base-wrapper'
	);

	return (
		<div className={className}>
			<TimePickerAdapter required {...props} value={value} />
			<TimezoneTimeInfo date={value} />
		</div>
	);
};
