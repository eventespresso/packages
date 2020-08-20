import React from 'react';
import { parseISO } from 'date-fns';
import { __ } from '@wordpress/i18n';

import { switchTenseForDate } from '@eventespresso/services';
import { useMemoStringify } from '@eventespresso/hooks';
import { BiggieCalendarDate, CalendarDateRange } from '../../';
import type { CalendarDateSwitcherProps } from './types';

const CalendarDateSwitcher: React.FC<CalendarDateSwitcherProps> = React.memo(
	({ className, displayBoth, displayEnd, displayStart = true, labels, ...props }) => {
		const startDate = useMemoStringify(parseISO(props.startDate), [props.startDate]);
		const endDate = useMemoStringify(parseISO(props.endDate), [props.endDate]);

		let headerText = '';
		let footerText = '';
		if (labels) {
			const { footer = '', footerPast, footerFuture, header = '', headerPast, headerFuture } = labels;
			footerText = footerPast && footerFuture ? switchTenseForDate(endDate, footerPast, footerFuture) : footer;
			headerText = headerPast && headerFuture ? switchTenseForDate(startDate, headerPast, headerFuture) : header;
		}

		if (displayEnd) {
			return (
				<BiggieCalendarDate
					className={className}
					date={endDate}
					footerText={footerText}
					headerText={headerText || __('ends')}
					showTime
				/>
			);
		}

		if (displayBoth) {
			return (
				<CalendarDateRange
					className={className}
					endDate={endDate}
					footerText={footerText}
					headerText={headerText}
					showTime
					startDate={startDate}
				/>
			);
		}

		// since this is the default value, it needs to be the last conditional
		if (displayStart) {
			return (
				<BiggieCalendarDate
					className={className}
					date={startDate}
					footerText={footerText}
					headerText={headerText || __('starts')}
					showTime
				/>
			);
		}
	}
);

export default CalendarDateSwitcher;
