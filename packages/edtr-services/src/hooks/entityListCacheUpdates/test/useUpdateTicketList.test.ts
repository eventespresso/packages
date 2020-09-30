import { useApolloClient } from '@eventespresso/data';
import { renderHook, act } from '@testing-library/react-hooks';

import { useCacheRehydration } from '../../../apollo/initialization';
import useUpdateTicketList from '../useUpdateTicketList';
import { useTicketQueryOptions, useTickets, useTicketIds } from '../../../apollo/queries';
import { ApolloMockedProvider } from '../../../context/test';
import { actWait } from '@eventespresso/utils/src/test';

describe('useUpdateTicketList', () => {
	it('checks for tickets cache update', async () => {
		const wrapper = ApolloMockedProvider();
		const { result } = renderHook(
			() => {
				useCacheRehydration();
				return {
					queryOptions: useTicketQueryOptions(),
					ticketlist: useTickets(),
					cacheUpdater: useUpdateTicketList(),
					client: useApolloClient(),
				};
			},
			{
				wrapper,
			}
		);
		await actWait();

		const ticketlist = result.current.ticketlist;

		const ticket = { ...ticketlist[0], id: ticketlist[0].id + '-alpha' };

		// add ticket to the list.
		const nodes = [...ticketlist, ticket];

		act(() => {
			result.current.cacheUpdater({
				...result.current.queryOptions,
				data: {
					espressoTickets: {
						__typename: 'EspressoRootQueryTicketsConnection',
						nodes,
					},
				},
			});
		});

		const cache = result.current.client.extract();
		const { result: cacheResult } = renderHook(
			() => {
				const client = useApolloClient();
				// restore the cache from previous render
				client.restore(cache);
				return useTicketIds();
			},
			{
				wrapper,
			}
		);
		await actWait();

		const cachedTicketIds = cacheResult.current;

		expect(cachedTicketIds.length).toBe(ticketlist.length + 1);

		expect(cachedTicketIds).toContain(ticket.id);
	});
});
