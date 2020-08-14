import React from 'react';
import { __ } from '@wordpress/i18n';

import { getGDates, getRecurrenceFrequency } from '../../utils';
import { useFormState } from '../../data';
import { GeneratedDate } from './types';

type WarningProps = {
	datetimes: Array<GeneratedDate>;
};

const Warning: React.FC<WarningProps> = ({ datetimes }) => {
	const { rRule } = useFormState();
	const count = getGDates(datetimes).length;
	const freq = getRecurrenceFrequency(rRule);

	let warning: string;
	switch (true) {
		case freq === 'YEARLY' && count >= 5:
			warning = __('The number of Event Dates has been capped at 5 for YEARLY recurrence patterns');
			break;
		case freq === 'MONTHLY' && count >= 24:
			warning = __('The number of Event Dates has been capped at 24 for MONTHLY recurrence patterns (2 years)');
			break;
		case freq === 'WEEKLY' && count >= 52:
			warning = __('The number of Event Dates has been capped at 52 for WEEKLY recurrence patterns (1 year)');
			break;
		case freq === 'DAILY' && count >= 92:
			warning = __('The number of Event Dates has been capped at 92 for DAILY recurrence patterns (~3 months)');
			break;
		default:
			warning = '';
			break;
	}

	return warning && <p className={'rem-max-event-dates-warning'}>{warning}</p>;
};

export default Warning;
