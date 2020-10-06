import React, { useMemo } from 'react';

import { DateTimePicker, DatePicker } from '@eventespresso/dates';
import { useRRuleConfig } from '../../hooks';

export interface OnDateProps {
	id: string;
	date: Date;
	onChange: (date: Date) => void;
	label?: string;
}

const OnDate: React.FC<OnDateProps> = ({ id, date, label, onChange }) => {
	const { locale, calendarComponent, enableTimepicker } = useRRuleConfig();

	const DateComponent = calendarComponent || (enableTimepicker ? DateTimePicker : DatePicker);

	const calendarAttributes = useMemo(
		() => ({
			'aria-label': label,
			id,
			locale,
			value: date,
		}),
		[date, id, label, locale]
	);

	return (
		<div className='rrule-generator__on-date'>
			<DateComponent {...calendarAttributes} onChange={onChange} />
		</div>
	);
};

export default OnDate;
