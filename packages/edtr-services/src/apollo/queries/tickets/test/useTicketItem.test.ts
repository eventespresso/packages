import { renderHook } from '@testing-library/react-hooks';

import { actWait } from '@eventespresso/utils/src/test';
import useTicketItem from '../useTicketItem';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from './data';
import useInitTicketTestCache from './useInitTicketTestCache';

describe('useTicketItem', () => {
	const existingTicket = nodes[0];
	const wrapper = ApolloMockedProvider();

	it('checks for non existent ticket when the cache is empty', async () => {
		const { result } = renderHook(() => useTicketItem({ id: existingTicket.id }), {
			wrapper,
		});
		await actWait();

		expect(result.current).toBe(undefined);
	});

	it('checks for non existent ticket when the cache is NOT empty', async () => {
		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				return useTicketItem({ id: 'fake-id' });
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current).toBe(undefined);
	});

	it('checks for an existent ticket', async () => {
		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				return useTicketItem({ id: existingTicket.id });
			},
			{ wrapper }
		);
		await actWait();

		const { current: ticketItem } = result;

		expect(ticketItem).toBeDefined();

		expect(ticketItem.id).toEqual(existingTicket.id);

		expect(ticketItem.dbId).toEqual(existingTicket.dbId);

		expect(ticketItem).toEqual(existingTicket);
	});
});
