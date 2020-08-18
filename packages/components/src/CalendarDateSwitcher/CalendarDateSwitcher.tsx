import React from 'react';
import { parseISO } from 'date-fns';
import { __ } from '@wordpress/i18n';

import { switchTenseForDate } from '@eventespresso/services';
import { DisplayStartOrEndDate } from '@eventespresso/edtr-services';
import { useMemoStringify } from '@eventespresso/hooks';
import { BiggieCalendarDate, CalendarDateRange } from '../../';
import type { CalendarDateSwitcherProps } from './types';

const CalendarDateSwitcher: React.FC<CalendarDateSwitcherProps> = React.memo(
	({ className, displayDate = DisplayStartOrEndDate.start, labels, ...props }) => {
		const startDate = useMemoStringify(parseISO(props.startDate), [props.startDate]);
		const endDate = useMemoStringify(parseISO(props.endDate), [props.endDate]);

		let headerText = '';
		let footerText = '';
		if (labels) {
			const { footer = '', footerPast, footerFuture, header = '', headerPast, headerFuture } = labels;
			footerText = footerPast && footerFuture ? switchTenseForDate(endDate, footerPast, footerFuture) : footer;
			headerText = headerPast && headerFuture ? switchTenseForDate(startDate, headerPast, headerFuture) : header;
		}

		const start = (
			<BiggieCalendarDate
				className={className}
				date={startDate}
				footerText={footerText}
				headerText={headerText || __('starts')}
				showTime
			/>
		);

		switch (displayDate) {
			case 'end':
				return (
					<BiggieCalendarDate
						className={className}
						date={endDate}
						footerText={footerText}
						headerText={headerText || __('ends')}
						showTime
					/>
				);
			case 'both':
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
			case 'start':
				return start;
			default:
				return start;
		}
	}
);

export default CalendarDateSwitcher;
