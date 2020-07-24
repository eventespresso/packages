import React from 'react';
import ReactDatepicker from 'react-date-picker';
import { useRRuleConfig } from '../hooks';

export interface OnDateProps {
	id: string;
	date: Date;
	onChange: (date: Date) => void;
	label?: string;
}

const OnDate: React.FC<OnDateProps> = ({ id, date, label, onChange }) => {
	const { locale, calendarComponent: CalendarComponent } = useRRuleConfig();
	const calendarAttributes = {
		'aria-label': label,
		value: date,
		locale,
		readOnly: true,
	};

	return (
		<div className='col-6 col-sm-3'>
			{CalendarComponent ? (
				<CalendarComponent
					key={`${id}-calendar`}
					{...calendarAttributes}
					onChange={(date) => {
						onChange(date);
					}}
				/>
			) : (
				<ReactDatepicker {...calendarAttributes} onChange={onChange} />
			)}
		</div>
	);
};

export default OnDate;
