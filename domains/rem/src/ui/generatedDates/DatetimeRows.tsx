import React from 'react';

import DatetimeRow from './DatetimeRow';

import { DatetimeRowsProps } from './types';

const DatetimeRows: React.FC<DatetimeRowsProps> = ({ datetimes, datetimesPage = [], onClick }) => {
	// return datetimesPage.map((date, index) => {
	return (
		<ul>
			{datetimes.map((date, index) => {
				return (
					<li key={index}>
						<DatetimeRow date={date} number={index + 1} onClick={onClick} type='generated' />
					</li>
				);
			})}
		</ul>
	);
};

export default DatetimeRows;
