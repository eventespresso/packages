import React from 'react';
import { __ } from '@eventespresso/i18n';

import { getGDates, getRecurrenceFrequency, DATE_COUNT_LIMITS } from '../../utils';
import { useFormState } from '../../data';
import { GeneratedDate } from './types';

type WarningProps = {
	datetimes: Array<GeneratedDate>;
};

const Warning: React.FC<WarningProps> = ({ datetimes }) => {
	const { rRule } = useFormState();
	const count = getGDates(datetimes).length;
	const freq = getRecurrenceFrequency(rRule);

	// Use the limits defined in constants
	const isCountCapped = count >= DATE_COUNT_LIMITS?.[freq];

	if (!isCountCapped) {
		return null;
	}

	let warning: string;
	switch (true) {
		case freq === 'YEARLY':
			warning = __('The number of Event Dates has been capped at 5 for YEARLY recurrence patterns');
			break;
		case freq === 'MONTHLY':
			warning = __('The number of Event Dates has been capped at 36 for MONTHLY recurrence patterns (3 years)');
			break;
		case freq === 'WEEKLY':
			warning = __('The number of Event Dates has been capped at 52 for WEEKLY recurrence patterns (1 year)');
			break;
		case freq === 'DAILY':
			warning = __('The number of Event Dates has been capped at 92 for DAILY recurrence patterns (~3 months)');
			break;
		default:
			warning = '';
			break;
	}

	return warning && <p className={'rem-max-event-dates-warning'}>{warning}</p>;
};

export default Warning;
