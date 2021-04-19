import { assocPath } from 'ramda';
import { renderHook, act } from '@testing-library/react-hooks';

import { actWait } from '@eventespresso/utils/src/test';
import useFilteredTickets from '../useFilteredTickets';
import { notTrashed } from '@eventespresso/predicates';
import TestWrapper from './TestWrapper';
import { nodes as tickets } from '@eventespresso/edtr-services/src/apollo/queries/tickets/test/data';
import { useFilterState } from '../../filters';

const ticketsWithATrashedOne = assocPath([1, 'isTrashed'], true, tickets);

describe('useFilteredTickets', () => {
	it('returns filtered tickets for default filter state', async () => {
		const { result } = renderHook(
			() => {
				return {
					filteredTickets: useFilteredTickets(ticketsWithATrashedOne),
					filterState: useFilterState(),
				};
			},
			{ wrapper: TestWrapper({ assignmentType: 'forAll' }) }
		);

		await actWait();

		act(() => {
			result.current.filterState.setShowExpiredTickets(true);
		});

		// by default trashed tickets are hidden
		expect(result.current.filteredTickets).not.toEqual(ticketsWithATrashedOne);
		expect(result.current.filteredTickets).toEqual(notTrashed(ticketsWithATrashedOne));
	});

	it('returns filtered tickets when show trashed tickets is active', async () => {
		const { result } = renderHook(
			() => {
				return {
					filteredTickets: useFilteredTickets(ticketsWithATrashedOne),
					filterState: useFilterState(),
				};
			},
			{ wrapper: TestWrapper({ assignmentType: 'forAll' }) }
		);

		await actWait();

		act(() => {
			result.current.filterState.setShowExpiredTickets(true);
			result.current.filterState.setShowTrashedTickets(true);
		});
		// now it should return all the tickets
		expect(result.current.filteredTickets).toEqual(ticketsWithATrashedOne);
	});
});
