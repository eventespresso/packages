import { head } from 'ramda';
import { renderHook, act } from '@testing-library/react-hooks';

import { actWait } from '@eventespresso/utils/src/test';
import { ApolloMockedProvider, relationalData } from '@eventespresso/edtr-services/src/context/test';
import useDataStateManager from '../useDataStateManager';

const props = { assignmentType: 'forAll' as const };

const wrapper = ApolloMockedProvider();

describe('useDataStateManager', () => {
	it('checks for assignment status between a date and a ticket', async () => {
		const { result } = renderHook(
			() => {
				return useDataStateManager(props);
			},
			{ wrapper }
		);

		await actWait();

		act(() => {
			result.current.initialize({ ...props, data: relationalData });
		});

		const ticketId = head(Object.keys(result.current.getData().tickets));
		const assignedDatetimes = result.current.getData().tickets[ticketId].datetimes;
		const datetimeId = head(assignedDatetimes);

		// they are old childhood friends
		expect(result.current.getAssignmentStatus({ datetimeId, ticketId })).toBe('OLD');

		// lets test their friendsip by separating them
		act(() => {
			result.current.removeAssignment({ datetimeId, ticketId });
		});
		expect(result.current.getAssignmentStatus({ datetimeId, ticketId })).toBe('REMOVED');

		const newDateId = 'new-date-id';

		// lets find a NEW parther for the ticket
		act(() => {
			result.current.addAssignment({ datetimeId: newDateId, ticketId });
		});

		expect(result.current.getAssignmentStatus({ datetimeId: newDateId, ticketId })).toBe('NEW');

		// Lets try a blind match
		expect(
			result.current.getAssignmentStatus({
				datetimeId: 'wants-to-go-to-mars',
				ticketId: 'not-a-big-fan-of-elon-musk',
			})
		).toBe(null);
	});

	it('checks if a datetime has no assigned tickets', async () => {
		const { result } = renderHook(
			() => {
				return useDataStateManager(props);
			},
			{ wrapper }
		);

		await actWait();

		act(() => {
			result.current.initialize({ ...props, data: relationalData });
		});

		const datetimeId = head(Object.keys(result.current.getData().datetimes));
		const assignedTickets = result.current.getData().datetimes[datetimeId].tickets;

		// it has tickets by default
		expect(result.current.hasNoAssignedTickets({ datetimeId })).toBe(false);

		// lets remove all the assigned tickets for the datetimeId
		assignedTickets.forEach((ticketId) => {
			act(() => {
				result.current.removeAssignment({ ticketId, datetimeId });
			});
		});
		// now it should have no tickets assigned
		expect(result.current.hasNoAssignedTickets({ datetimeId })).toBe(true);

		// lets assign the datetime to a new ticket
		const newTicketId = 'new-ticket-id';
		act(() => {
			result.current.addAssignment({ ticketId: newTicketId, datetimeId });
		});
		expect(result.current.hasNoAssignedTickets({ datetimeId })).toBe(false);
	});

	it('checks for orphan entities in the state', async () => {
		const { result } = renderHook(
			() => {
				return useDataStateManager(props);
			},
			{ wrapper }
		);

		await actWait();

		act(() => {
			result.current.initialize({ ...props, data: relationalData });
		});

		expect(result.current.hasOrphanDates()).toBe(false);
		expect(result.current.hasOrphanTickets()).toBe(false);
		expect(result.current.hasOrphanEntities()).toBe(false);

		const datetimeId = head(Object.keys(result.current.getData().datetimes));
		const assignedTickets = result.current.getData().datetimes[datetimeId].tickets;

		// lets remove all the assigned tickets for the datetimeId
		assignedTickets.forEach((ticketId) => {
			act(() => {
				result.current.removeAssignment({ ticketId, datetimeId });
			});
		});
		// now it should have no tickets assigned
		expect(result.current.hasOrphanDates()).toBe(true);
		expect(result.current.hasOrphanEntities()).toBe(true);

		const ticketId = head(Object.keys(result.current.getData().tickets));
		const assignedDates = result.current.getData().tickets[ticketId].datetimes;

		assignedDates.forEach((datetimeId) => {
			act(() => {
				result.current.removeAssignment({ ticketId, datetimeId });
			});
		});
		expect(result.current.hasOrphanEntities()).toBe(true);
		expect(result.current.hasOrphanTickets()).toBe(true);
	});
});
