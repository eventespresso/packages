import { renderHook, act } from '@testing-library/react-hooks';
import { path } from 'ramda';

import { useRelations } from '@eventespresso/services';
import { MutationType } from '@eventespresso/data';
import { ApolloMockedProvider } from '../../../../context/test';
import { getMutationMocks, mockedTickets } from './data';
import { nodes as datetimes } from '../../../queries/datetimes/test/data';
import { nodes as prices } from '../../../queries/prices/test/data';
import { useTicketMutator } from '../';
import { getGuids } from '@eventespresso/predicates';
import { actWait } from '@eventespresso/utils/src/test';

describe('deleteTicket', () => {
	const mockedTicket = mockedTickets.DELETE;

	const datetimeIds = getGuids(datetimes);
	const priceIds = getGuids(prices);

	let mutationMocks = getMutationMocks({}, MutationType.Delete);

	const { result: mockResult } = mutationMocks[0];

	it('checks for the mutation data to be same as the mock data', async () => {
		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result } = renderHook(() => useTicketMutator(mockedTicket.id), {
			wrapper,
		});

		let mutationData: any;

		act(() => {
			result.current.deleteEntity().then(({ data }) => {
				mutationData = data;
			});
		});

		// wait for mutation promise to resolve
		await actWait();

		expect(mutationData).toEqual(mockResult.data);
		const pathToId = ['deleteEspressoTicket', 'espressoTicket', 'name'];

		const idFromMutationData = path(pathToId, mutationData);
		const idFromMockData = path(pathToId, mockResult.data);

		expect(idFromMutationData).toEqual(idFromMockData);
	});

	it('checks for datetime relation update after mutation - trash', async () => {
		// Add related datetime Ids to the mutation input

		mutationMocks = getMutationMocks({}, MutationType.Delete);

		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result: mutationResult } = renderHook(
			() => ({
				mutator: useTicketMutator(mockedTicket.id),
				relationsManager: useRelations(),
			}),
			{
				wrapper,
			}
		);

		await actWait();

		act(() => {
			mutationResult.current.mutator.deleteEntity({});
		});

		// wait for mutation promise to resolve
		await actWait();

		const relatedDatetimeIds = mutationResult.current.relationsManager.getRelations({
			entity: 'tickets',
			entityId: mockedTicket.id,
			relation: 'datetimes',
		});

		expect(relatedDatetimeIds.length).toBe(1);
	});

	it('checks for datetime relation update after mutation - permanent delete', async () => {
		const testInput = { deletePermanently: true };
		// Add related datetime Ids to the mutation input
		mutationMocks = getMutationMocks(testInput, MutationType.Delete);

		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result: mutationResult } = renderHook(
			() => ({
				mutator: useTicketMutator(mockedTicket.id),
				relationsManager: useRelations(),
			}),
			{
				wrapper,
			}
		);

		await actWait();

		act(() => {
			mutationResult.current.mutator.deleteEntity(testInput);
		});

		// wait for mutation promise to resolve
		await actWait();

		const relatedDatetimeIds = mutationResult.current.relationsManager.getRelations({
			entity: 'tickets',
			entityId: mockedTicket.id,
			relation: 'datetimes',
		});

		expect(relatedDatetimeIds.length).toBe(0);

		// check if all the passed datetimes are related to the ticket
		datetimeIds.forEach((datetimeId) => {
			const relatedTicketIds = mutationResult.current.relationsManager.getRelations({
				entity: 'datetimes',
				entityId: datetimeId,
				relation: 'tickets',
			});

			expect(relatedTicketIds).not.toContain(mockedTicket.id);
		});
	});

	it('checks for price relation update after mutation - trash', async () => {
		mutationMocks = getMutationMocks({}, MutationType.Delete);

		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result: mutationResult } = renderHook(
			() => ({
				mutator: useTicketMutator(mockedTicket.id),
				relationsManager: useRelations(),
			}),
			{
				wrapper,
			}
		);

		await actWait();

		act(() => {
			mutationResult.current.mutator.deleteEntity({});
		});

		// wait for mutation promise to resolve
		await actWait();

		const relatedPriceIds = mutationResult.current.relationsManager.getRelations({
			entity: 'tickets',
			entityId: mockedTicket.id,
			relation: 'prices',
		});

		expect(relatedPriceIds.length).toBe(2);
	});

	it('checks for price relation update after mutation - permanent delete', async () => {
		const testInput = { deletePermanently: true };
		mutationMocks = getMutationMocks(testInput, MutationType.Delete);

		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result: mutationResult } = renderHook(
			() => ({
				mutator: useTicketMutator(mockedTicket.id),
				relationsManager: useRelations(),
			}),
			{
				wrapper,
			}
		);

		await actWait();

		act(() => {
			mutationResult.current.mutator.deleteEntity(testInput);
		});

		// wait for mutation promise to resolve
		await actWait();

		const relatedPriceIds = mutationResult.current.relationsManager.getRelations({
			entity: 'tickets',
			entityId: mockedTicket.id,
			relation: 'prices',
		});

		expect(relatedPriceIds.length).toBe(0);

		// check if all the passed prices are related to the ticket
		priceIds.forEach((priceId) => {
			const relatedTicketIds = mutationResult.current.relationsManager.getRelations({
				entity: 'prices',
				entityId: priceId,
				relation: 'tickets',
			});

			expect(relatedTicketIds).not.toContain(mockedTicket.id);
		});
	});
});
