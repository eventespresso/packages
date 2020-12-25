import React from 'react';
import classNames from 'classnames';
import { differenceInCalendarDays, parseISO, isValid, format as formatFunc } from 'date-fns';

import { __ } from '@eventespresso/i18n';
import { TIME_ONLY_12H_SHORT_FORMAT } from '@eventespresso/constants';

import { BiggieCalendarDate, MediumCalendarDate } from '../../';
import type { CalendarDateRangeProps } from './types';
import './style.scss';

/**
 * Displays a pair of calendar dates representing a date range
 */
const CalendarDateRange: React.FC<CalendarDateRangeProps> = ({
	className = '',
	endDate,
	footerText = '',
	formatFn: format = formatFunc,
	headerText = '',
	showTime = true,
	startDate,
}) => {
	const startDateObject = startDate instanceof Date ? startDate : parseISO(startDate);
	const endDateObject = endDate instanceof Date ? endDate : parseISO(endDate);

	if (!isValid(startDateObject) || !isValid(endDateObject)) {
		return null;
	}

	if (differenceInCalendarDays(startDateObject, endDateObject) !== 0) {
		const htmlClassName = classNames(className, 'ee-calendar-date-range-wrapper');
		return (
			<div className={htmlClassName}>
				<div className={'ee-calendar-date-range'}>
					<MediumCalendarDate date={startDateObject} formatFn={format} key='start-date' showTime={showTime} />
					<div className={'ee-calendar-date-range__divider'}>{__('to')}</div>
					<MediumCalendarDate date={endDateObject} formatFn={format} key='end-date' showTime={showTime} />
				</div>
				{footerText && <div className={'ee-calendar-date-range__footer'}>{footerText}</div>}
			</div>
		);
	}
	const time =
		format(startDateObject, TIME_ONLY_12H_SHORT_FORMAT + ' - ') + format(endDateObject, TIME_ONLY_12H_SHORT_FORMAT);
	const headerTxt = headerText ? headerText : <span>&nbsp;</span>;

	return (
		<BiggieCalendarDate
			date={startDateObject}
			className={className}
			headerText={headerTxt}
			footerText={footerText}
			timeRange={time}
		/>
	);
};

export default CalendarDateRange;
