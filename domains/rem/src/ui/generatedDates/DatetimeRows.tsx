import React from 'react';

import DatetimeRow from './DatetimeRow';

import { DatetimeRowsProps } from './types';
import { useFormState } from '../../data';

const DatetimeRows: React.FC<DatetimeRowsProps> = ({ datetimes, datetimesPage = [], onClick }) => {
	const { addExDate, removeRDate, removeExDate, rDates, exDates } = useFormState();
	return (
		<ul>
			{datetimes.map((date, index) => {
				const isRDate = rDates.includes(date);
				const isExDate = exDates.includes(date);
				return (
					<li key={date + index}>
						<DatetimeRow
							date={date}
							number={index + 1}
							toggleExDate={isExDate ? removeExDate : isRDate ? removeRDate : addExDate}
							type={isRDate ? 'addition' : isExDate ? 'exception' : 'generated'}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default DatetimeRows;
