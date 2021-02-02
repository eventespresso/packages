import isLocked from './index';
import { nodes as tickets } from '@eventespresso/edtr-services/src/apollo/queries/tickets/test/data';

const testCases = [
	{
		desc: 'returns true when registrationCount is greater than 0',
		registrationCount: 5,
		result: true,
	},
	{
		desc: 'returns false when registrationCount is 0',
		registrationCount: 0,
		result: false,
	},
	{
		desc: 'returns false when registrationCount is less than 0',
		registrationCount: -5,
		result: false,
	},
	{
		desc: 'returns false when registrationCount is undefined',
		registrationCount: undefined,
		result: false,
	},
	{
		desc: 'returns false when registrationCount is null',
		registrationCount: null,
		result: false,
	},
];

describe('isLocked', () => {
	const ticket = tickets[0];
	testCases.forEach(({ desc, registrationCount, result }) => {
		const newTicket = {
			...ticket,
			registrationCount,
		};
		it(desc, () => {
			expect(isLocked(newTicket)).toBe(result);
		});
	});
});
