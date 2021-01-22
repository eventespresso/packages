import { renderHook } from '@testing-library/react-hooks';

import { useTPCInitialState } from '../useTPCInitialState';
import { nodes as tickets } from '../../../apollo/queries/tickets/test/data';
import TestWrapper from './TestWrapper';
import { actWait } from '@eventespresso/utils/src/test';

const mockTicket = tickets[0];

describe('TPC:useInitialState', () => {
	it('returns the computed initial state for the passed ticketId', async () => {
		const { result } = renderHook(
			() => {
				return useTPCInitialState({ ticketId: mockTicket.id });
			},
			{
				wrapper: TestWrapper,
			}
		);

		await actWait();

		const initialState = result.current(null);

		expect(initialState).toHaveProperty('ticket');
		expect(initialState).toHaveProperty('prices');

		expect(initialState.ticket.id).toBe(mockTicket.id);
		expect(initialState.ticket.reverseCalculate).toBe(mockTicket.reverseCalculate);

		expect(Array.isArray(initialState.prices)).toBe(true);
	});
});
