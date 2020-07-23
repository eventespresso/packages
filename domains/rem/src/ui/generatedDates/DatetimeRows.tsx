import React from 'react';

import DatetimeRow from './DatetimeRow';

const DatetimeRows = ({ datetimes, datetimesPage = [], onClick }) => {
	// return datetimesPage.map((date, index) => {
	return datetimes.map((date, index) => {
		return (
			<li key={index}>
				<DatetimeRow date={date} number={index + 1} onClick={onClick} />
			</li>
		);
	});
};

export default DatetimeRows;
