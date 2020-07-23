import React from 'react';
import ReactDatepicker from 'react-date-picker';
import { __ } from '@wordpress/i18n';

import { OnDateProps } from './types';

const OnDate: React.FC<OnDateProps> = ({ id, value, onChange, calendarComponent: CalendarComponent, locale }) => {
	const calendarAttributes = {
		'aria-label': __('Start'),
		value,
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
