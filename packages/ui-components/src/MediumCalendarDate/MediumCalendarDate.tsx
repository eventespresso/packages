import classNames from 'classnames';
import { parseISO, isValid, format } from 'date-fns';

import {
	DAY_ONLY_SHORT_FORMAT,
	MONTH_ONLY_LONG_FORMAT,
	TIME_ONLY_12H_SHORT_FORMAT,
	WEEKDAY_ONLY_FULL_FORMAT,
	YEAR_ONLY_LONG_FORMAT,
} from '@eventespresso/constants';

import type { CalendarBaseProps, CalendarDateProps } from '../types';

import './style.scss';

export interface MediumCalendarDateProps extends CalendarDateProps, CalendarBaseProps {
	date: Date;
	addWrapper?: boolean;
}

/**
 * Displays a full calendar date... just not so bigly
 */
export const MediumCalendarDate: React.FC<MediumCalendarDateProps> = ({
	date,
	headerText,
	footerText,
	formatFn = format,
	addWrapper = false,
	showTime = false,
	...props
}) => {
	const dateObject: Date = date instanceof Date ? date : parseISO(date);

	if (!isValid(dateObject)) {
		return null;
	}

	const className = classNames(props.className, 'ee-medium-calendar-date__wrapper');

	const mediumDate = (
		<>
			{headerText && <div className='ee-medium-calendar-date__header'>{headerText}</div>}
			<div className='ee-medium-calendar-date'>
				<div className='ee-mcd__weekday'>{formatFn(dateObject, WEEKDAY_ONLY_FULL_FORMAT)}</div>
				<div className='ee-mcd__month-day'>
					<span className='ee-mcd__month'>{formatFn(dateObject, MONTH_ONLY_LONG_FORMAT)}</span>
					<span className='ee-mcd__day'>{formatFn(dateObject, DAY_ONLY_SHORT_FORMAT)}</span>
				</div>
				<div className='ee-mcd__year'>{formatFn(dateObject, YEAR_ONLY_LONG_FORMAT)}</div>
				{showTime && <div className='ee-mcd__time'>{formatFn(dateObject, TIME_ONLY_12H_SHORT_FORMAT)}</div>}
			</div>
			{footerText && <div className='ee-medium-calendar-date__footer'>{footerText}</div>}
		</>
	);
	return addWrapper ? <div className={className}>{mediumDate}</div> : mediumDate;
};
