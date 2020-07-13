import React from 'react';

import DatetimeRow from './DatetimeRow';
import { Pagination } from '@eventespresso/adapters';

const DatetimeRows = ({ datetimes, datetimesPage, onClick }) => {
	return datetimesPage.map((date, index) => {
		if (datetimesPage[index] instanceof Date) {
			let number = datetimes.indexOf(date);
			number++;
			return (
				<li key={index}>
					<DatetimeRow date={date} number={number} onClick={onClick} />
				</li>
			);
		}
	});
};

const maxEventDatesWarning = (freq, count) => {
	let warning = '';
	switch (freq) {
		case 'YEARLY':
			warning =
				count >= 5 ? 'The number of Event Dates has been capped at 5' + ' for YEARLY recurrence patterns' : '';
			break;
		case 'MONTHLY':
			warning =
				count >= 24
					? 'The number of Event Dates has been capped at 24' + ' for MONTHLY recurrence patterns (2 years)'
					: '';
			break;
		case 'WEEKLY':
			warning =
				count >= 52
					? 'The number of Event Dates has been capped at 52' + ' for WEEKLY recurrence patterns (1 year)'
					: '';
			break;
		case 'DAILY':
			warning =
				count >= 92
					? 'The number of Event Dates has been capped at 92' + ' for DAILY recurrence patterns (~3 months)'
					: '';
			break;
	}

	return warning.length && <p className={'rem-max-event-dates-warning'}>{warning}</p>;
};

const Datetimes: React.FC<any> = ({
	datetimes,
	datetimesPage,
	freq,
	onClick,
	pageNumber,
	perPage,
	setPerPage,
	setPageNumber,
	showPerPageChanger = true,
	total,
}) => {
	return (
		<>
			<div className={'px-0 pt-3 border rounded'}>
				<div className='px-3'>
					<div className='col-sm-8 offset-sm-2'>
						<div className='form-group'>
							<ul className='generated-datetimes-list'>
								<DatetimeRows datetimes={datetimes} datetimesPage={datetimesPage} onClick={onClick} />
							</ul>
							<div className='rem-gdp-div'>
								<Pagination
									defaultPerPage={6}
									onChangePageNumber={setPageNumber}
									onChangePerPage={setPerPage}
									pageNumber={pageNumber}
									perPage={perPage}
									showPerPageChanger={showPerPageChanger}
									total={total}
								/>
							</div>
							<div className='rem-gdp-div'>{maxEventDatesWarning(freq, datetimes.length)}</div>
						</div>
					</div>
				</div>
			</div>
			<input type={'hidden'} id={'rem-generated-datetimes-json'} />
		</>
	);
};

export default Datetimes;
