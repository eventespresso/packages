import { renderHook, act } from '@testing-library/react-hooks';
import { path } from 'ramda';

import { useRelations } from '@eventespresso/services';
import { MutationType } from '@eventespresso/data';
import { ApolloMockedProvider } from '../../../../context/test';
import { getMutationMocks, mockedDatetimes } from './data';
import { nodes as tickets } from '../../../queries/tickets/test/data';
import useInitDatetimeTestCache from '../../../queries/datetimes/test/useInitDatetimeTestCache';
import { useDatetimeMutator, UpdateDatetimeInput } from '../';
import { getGuids } from '@eventespresso/predicates';
import { actWait } from '@eventespresso/utils/src/test';

describe('updateDatetime', () => {
	const mockedDatetime = mockedDatetimes.UPDATE;
	let testInput: UpdateDatetimeInput = { ...mockedDatetime, name: 'New Test Date', description: 'New Test Desc' };

	const ticketIds = getGuids(tickets);

	let mutationMocks = getMutationMocks({ ...testInput, id: mockedDatetime.id }, MutationType.Update);

	const { result: mockResult } = mutationMocks[0];

	it('checks for the mutation data to be same as the mock data', async () => {
		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useDatetimeMutator(mockedDatetime.id);
			},
			{
				wrapper,
			}
		);

		let mutationData: any;

		act(() => {
			result.current.updateEntity(testInput).then(({ data }) => {
				mutationData = data;
			});
		});

		await actWait();

		expect(mutationData).toEqual(mockResult.data);
		const pathToName = ['updateEspressoDatetime', 'espressoDatetime', 'name'];

		const nameFromMutationData = path<string>(pathToName, mutationData);
		const nameFromMockData = path<string>(pathToName, mockResult.data);

		expect(nameFromMutationData).toEqual(nameFromMockData);
	});

	it('checks for relation addition/update after mutation', async () => {
		// Add related ticket Ids to the mutation input
		testInput = { ...testInput, tickets: ticketIds };

		mutationMocks = getMutationMocks({ ...testInput, id: mockedDatetime.id }, MutationType.Update);

		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result: mutationResult } = renderHook(
			() => ({
				mutator: useDatetimeMutator(mockedDatetime.id),
				relationsManager: useRelations(),
			}),
			{
				wrapper,
			}
		);

		await act(async () => {
			await mutationResult.current.mutator.updateEntity(testInput);
		});

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

	it('checks for relation removal/update after mutation', async () => {
		// Add related ticket Ids to the mutation input
		testInput = { ...testInput, tickets: ticketIds };

		mutationMocks = getMutationMocks({ ...testInput, id: mockedDatetime.id }, MutationType.Update);

		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result: mutationResult } = renderHook(
			() => ({
				mutator: useDatetimeMutator(mockedDatetime.id),
				relationsManager: useRelations(),
			}),
			{
				wrapper,
			}
		);

		const tempTicketId = 'temp-tkt-id';

		act(() => {
			// add relation between mockedDatetime and a random ticket id
			mutationResult.current.relationsManager.addRelation({
				entity: 'datetimes',
				entityId: mockedDatetime.id,
				relation: 'tickets',
				relationId: tempTicketId,
			});
		});

		// check if datetime is related to `tempTicketId`
		let relatedTicketIds = mutationResult.current.relationsManager.getRelations({
			entity: 'datetimes',
			entityId: mockedDatetime.id,
			relation: 'tickets',
		});
		expect(relatedTicketIds).toContain(tempTicketId);

		await act(async () => {
			// mutate
			await mutationResult.current.mutator.updateEntity(testInput);
		});

		// check if datetime is related to `tempTicketId`
		relatedTicketIds = mutationResult.current.relationsManager.getRelations({
			entity: 'datetimes',
			entityId: mockedDatetime.id,
			relation: 'tickets',
		});

		// check if datetime has been removed from tempTicketId relation
		expect(relatedTicketIds).not.toContain(tempTicketId);
	});
});
