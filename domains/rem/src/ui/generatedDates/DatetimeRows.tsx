import React from 'react';

import DatetimeRow from './DatetimeRow';

import { DatetimeRowsProps } from './types';
import { useFormState } from '../../data';

const DatetimeRows: React.FC<DatetimeRowsProps> = ({ datetimes, datetimesPage = [] }) => {
	const { addExDate, removeRDate, removeExDate } = useFormState();

	return (
		<ul>
			{datetimes.map(({ date, ISOStr, type }, index) => {
				const isRDate = type === 'rDate';
				const isExDate = type === 'exDate';

				return (
					<li key={ISOStr}>
						<DatetimeRow
							date={date}
							ISOStr={ISOStr}
							number={index + 1}
							toggleExDate={isExDate ? removeExDate : isRDate ? removeRDate : addExDate}
							type={type}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default DatetimeRows;
