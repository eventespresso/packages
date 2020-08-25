import React, { useCallback } from 'react';
import classNames from 'classnames';
import { parseISO, isValid } from 'date-fns';

import { Button } from '../Button';
import { Calendar } from '@eventespresso/icons';

import { LabelPosition } from '../withLabel';
import {
	DAY_ONLY_SHORT_FORMAT,
	MONTH_ONLY_FULL_FORMAT,
	TIME_ONLY_12H_SHORT_FORMAT,
	WEEKDAY_ONLY_FULL_FORMAT,
	YEAR_ONLY_LONG_FORMAT,
} from '@eventespresso/constants';
import { useTimeZoneTime } from '@eventespresso/services';

import type { BiggieCalendarProps } from './index';
import './style.scss';

/**
 * Displays a full calendar date, but REALLY BIG!!
 */
export const BiggieCalendar: React.FC<BiggieCalendarProps> = ({
	date,
	editButton = {},
	footerText,
	headerText,
	onEdit = null,
	showTime = false,
	timeRange,
	...props
}) => {
	const { formatForSite: format } = useTimeZoneTime();
	const onEditHandler = useCallback((event) => onEdit(event), [onEdit]);
	const dateObject = date instanceof Date ? date : parseISO(date);

	if (!isValid(dateObject)) {
		return null;
	}

	const className = classNames(props.className, 'ee-biggie-calendar__wrapper');

	const editDateButton = typeof onEdit === 'function' && (
		<Button
			className='ee-edit-calendar-date-btn'
			onClick={onEditHandler}
			onKeyPress={onEditHandler}
			tooltip={editButton.tooltip}
			labelPosition={editButton.tooltipPosition as LabelPosition}
			icon={Calendar}
		/>
	);

	return (
		<div className={className}>
			{headerText && <div className='ee-biggie-calendar__header'>{headerText}</div>}
			<div className='ee-biggie-calendar'>
				<div className='ee-biggie-calendar__weekday'>{format(dateObject, WEEKDAY_ONLY_FULL_FORMAT)}</div>
				<div className='ee-biggie-calendar__month'>{format(dateObject, MONTH_ONLY_FULL_FORMAT)}</div>
				<div className='ee-biggie-calendar__month-day-sep'></div>
				<div className='ee-biggie-calendar__day'>{format(dateObject, DAY_ONLY_SHORT_FORMAT)}</div>
				<div className='ee-biggie-calendar__year'>{format(dateObject, YEAR_ONLY_LONG_FORMAT)}</div>
				{showTime && !timeRange && (
					<div className='ee-biggie-calendar__time'>{format(dateObject, TIME_ONLY_12H_SHORT_FORMAT)}</div>
				)}
				{timeRange && <div className='ee-biggie-calendar__time'>{timeRange}</div>}
			</div>
			{footerText && <div className='ee-biggie-calendar__footer'>{footerText}</div>}
			{editDateButton}
		</div>
	);
};
