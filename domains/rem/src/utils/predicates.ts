import * as R from 'ramda';

import { RemTicket } from '../data';
import { GeneratedDate } from '../ui/generatedDates';

// is a shared ticket ?
export const isShared = R.propEq('isShared', true);
export const isNotShared = R.propEq('isShared', false);

export const getSharedTickets = (tickets: Array<RemTicket>): Array<RemTicket> => {
	return R.filter<RemTicket>(isShared, tickets);
};

export const getNonSharedTickets = (tickets: Array<RemTicket>): Array<RemTicket> => {
	return R.filter<RemTicket>(isNotShared, tickets);
};

export const isGDate = ({ type }: GeneratedDate): boolean => type === 'gDate';

export const getGDates = (generatedDates: Array<GeneratedDate>): Array<GeneratedDate> => {
	return R.filter<GeneratedDate>(isGDate, generatedDates);
};
