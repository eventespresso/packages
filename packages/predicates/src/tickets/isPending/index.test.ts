import { formatISO } from 'date-fns';
import { add, sub } from '@eventespresso/dates';

import isPending from './index';
import { nodes as tickets } from '@eventespresso/edtr-services/src/apollo/queries/tickets/test/data';
import { NOW as now } from '@eventespresso/constants';

const testCases = [
	{
		desc: 'returns false when ticket.isPending is false AND startDate is in the past',
		pending: false,
		futureStart: false,
		result: false,
	},
	{
		desc: 'returns true when ticket.isPending is false BUT startDate is in the future',
		pending: false,
		futureStart: true,
		result: true,
	},
	{
		desc: 'returns true when ticket.isPending is true BUT startDate is in the past',
		pending: true,
		futureStart: false,
		result: true,
	},
	{
		desc: 'returns true when ticket.isPending is true AND startDate is in the future',
		pending: true,
		futureStart: true,
		result: true,
	},
];

const modifyDate = (inFuture: boolean): Date => (inFuture ? add('weeks', now, 1) : sub('weeks', now, 1));

describe('isPending', () => {
	tickets.forEach((ticket) => {
		testCases.forEach(({ desc, pending, futureStart, result }) => {
			const startDate = modifyDate(futureStart);
			const newTicket = {
				...ticket,
				isPending: pending,
				startDate: formatISO(startDate),
			};
			it(desc, () => {
				expect(isPending(newTicket)).toBe(result);
			});
		});
	});
});
