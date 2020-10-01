import React, { useCallback, useMemo } from 'react';

import { DateTimePicker } from '@eventespresso/dates';
import { useRRuleConfig } from '../../hooks';

export interface OnDateProps {
	id: string;
	date: Date;
	onChange: (date: Date) => void;
	label?: string;
}

const OnDate: React.FC<OnDateProps> = ({ id, date, label, onChange }) => {
	const { locale, calendarComponent: CalendarComponent } = useRRuleConfig();
	const calendarAttributes = useMemo(
		() => ({
			'aria-label': label,
			id,
			locale,
			value: date,
		}),
		[date, id, label, locale]
	);

	const onChangeDate = useCallback(
		(date) => {
			onChange(date);
		},
		[onChange]
	);

	return (
		<div className='rrule-generator__on-date'>
			{CalendarComponent ? (
				<CalendarComponent key={`${id}-calendar`} {...calendarAttributes} onChange={onChangeDate} />
			) : (
				<DateTimePicker {...calendarAttributes} onChange={onChange} />
			)}
		</div>
	);
};

export default OnDate;
