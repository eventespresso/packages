import React from 'react';

const Warning = ({ freq, count }) => {
	let warning = '';

	switch (freq) {
		case 'YEARLY':
			warning =
				count >= 5 ? __('The number of Event Dates has been capped at 5 for YEARLY recurrence patterns') : '';
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

export default Warning;
