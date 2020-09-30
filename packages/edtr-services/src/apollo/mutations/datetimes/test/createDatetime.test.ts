import { useApolloClient } from '@eventespresso/data';
import { renderHook, act } from '@testing-library/react-hooks';
import { path } from 'ramda';

import { useDatetimeMutator } from '../';
import { useRelations } from '@eventespresso/services';
import { MutationType, MutationInput } from '@eventespresso/data';
import { ApolloMockedProvider } from '../../../../context/test';
import { getMutationMocks, mockedDatetimes } from './data';
import { nodes as tickets } from '../../../queries/tickets/test/data';
import useDatetimeItem from '../../../queries/datetimes/useDatetimeItem';
import useDatetimeIds from '../../../queries/datetimes/useDatetimeIds';
import useInitTicketTestCache from '../../../queries/tickets/test/useInitTicketTestCache';
import useTickets from '../../../queries/tickets/useTickets';
import useTicketQueryOptions from '../../../queries/tickets/useTicketQueryOptions';
import { getGuids } from '@eventespresso/predicates';
import { actWait } from '@eventespresso/utils/src/test';

describe('createDatetime', () => {
	let testInput: MutationInput = { name: 'New Test Date', description: 'New Test Desc' };
	const mockedDatetime = mockedDatetimes.CREATE;

	const ticketIds = getGuids(tickets);

	let mutationMocks = getMutationMocks(testInput, MutationType.Create);

	const { result: mockResult } = mutationMocks[0];

	it('checks for the mutation data to be same as the mock data', async () => {
		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result } = renderHook(() => useDatetimeMutator(), {
			wrapper,
		});

		let mutationData: any;

		act(() => {
			result.current.createEntity(testInput).then(({ data }) => {
				mutationData = data;
			});
		});

		// wait for mutation promise to resolve
		await actWait();

		expect(mutationData).toEqual(mockResult.data);
		const pathToName = ['createEspressoDatetime', 'espressoDatetime', 'name'];

		const nameFromMutationData = path<string>(pathToName, mutationData);
		const nameFromMockData = path<string>(pathToName, mockResult.data);

		expect(nameFromMutationData).toEqual(nameFromMockData);
	});

	it('checks for the mutation data to be same as that in the cache - useDatetimeItem', async () => {
		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result: mutationResult } = renderHook(
			() => ({
				mutator: useDatetimeMutator(),
				client: useApolloClient(),
			}),
			{
				wrapper,
			}
		);

		act(() => {
			mutationResult.current.mutator.createEntity(testInput);
		});

		// wait for mutation promise to resolve
		await actWait();

		const cache = mutationResult.current.client.extract();
		const { result: cacheResult } = renderHook(
			() => {
				const client = useApolloClient();
				// restore the cache from previous render
				client.restore(cache);
				return useDatetimeItem({ id: mockedDatetime.id });
			},
			{
				wrapper,
			}
		);

		await actWait();

		const cachedDatetime = cacheResult.current;

		expect(cachedDatetime).toEqual({ ...mockedDatetime, ...testInput });
	});

	it('checks for the mutation data to be same as that in the cache - useDatetimeIds', async () => {
		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result: mutationResult } = renderHook(
			() => ({
				mutator: useDatetimeMutator(),
				client: useApolloClient(),
			}),
			{
				wrapper,
			}
		);

		act(() => {
			mutationResult.current.mutator.createEntity(testInput);
		});
		// wait for actual update instead of optimistic response
		await actWait();

		const cache = mutationResult.current.client.extract();

		const { result: cacheResult } = renderHook(
			() => {
				const client = useApolloClient();
				// restore the cache from previous render
				client.restore(cache);
				return useDatetimeIds();
			},
			{
				wrapper,
			}
		);

		await actWait();

		const cachedDatetimes = cacheResult.current;

		expect(cachedDatetimes).toContain(mockedDatetime.id);
	});

	it('checks for relation update after mutation', async () => {
		// Add related ticket Ids to the mutation input
		testInput = { ...testInput, tickets: ticketIds };

		mutationMocks = getMutationMocks(testInput, MutationType.Create);

		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result: mutationResult } = renderHook(
			() => ({
				mutator: useDatetimeMutator(),
				relationsManager: useRelations(),
			}),
			{
				wrapper,
			}
		);

		act(() => {
			mutationResult.current.mutator.createEntity(testInput);
		});
		// wait for actual update instead of optimistic response
		await actWait();

		// check if datetime is related to all the passed tickets
		const relatedTicketIds = mutationResult.current.relationsManager.getRelations({
			entity: 'datetimes',
			entityId: mockedDatetime.id,
			relation: 'tickets',
		});

		expect(ticketIds.length).toEqual(relatedTicketIds.length);

		expect(ticketIds).toEqual(relatedTicketIds);

		// check if all the passed tickets are related to the datetime
		ticketIds.forEach((ticketId) => {
			const relatedDatetimeIds = mutationResult.current.relationsManager.getRelations({
				entity: 'tickets',
				entityId: ticketId,
				relation: 'datetimes',
			});

			expect(relatedDatetimeIds).toContain(mockedDatetime.id);
		});
	});

	it('checks if the mutation updates tickets cache', async () => {
		// Add related ticket Ids to the mutation input
		testInput = { ...testInput, tickets: ticketIds };

		mutationMocks = getMutationMocks(testInput, MutationType.Create);

		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result: mutationResult } = renderHook(
			() => {
				useInitTicketTestCache();
				return {
					mutator: useDatetimeMutator(),
					client: useApolloClient(),
				};
			},
			{
				wrapper,
			}
		);

		await actWait();

		act(() => {
			mutationResult.current.mutator.createEntity(testInput);
		});
		// wait for actual update instead of optimistic response
		await actWait();

		const cache = mutationResult.current.client.extract();
		const { result: cacheResult } = renderHook(
			() => {
				const client = useApolloClient();
				// restore the cache from previous render
				client.restore(cache);
				return {
					queryOptions: useTicketQueryOptions(),
					tickets: useTickets(),
				};
			},
			{
				wrapper,
			}
		);

		await actWait();

		const queryOptions = cacheResult.current.queryOptions;
		const cachedTickets = cacheResult.current.tickets;

		// check if query options are updated,
		// which means the cache is updated
		expect(queryOptions.variables.where.datetimeIn).toContain(mockedDatetime.id);
		expect(cachedTickets).toBeDefined();
	});
});
