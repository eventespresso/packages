import { head } from 'ramda';
import { act, renderHook } from '@testing-library/react-hooks';
import { formatISO } from 'date-fns';

import useFormStateManager from '../useFormStateManager';
import type { DateFormShape } from '../../ui/datetimeDetails/types';
import { RemTicket } from '../types';

describe('REM.useFormStateManager', () => {
	it('checks types for state values', () => {
		const { result } = renderHook(() => useFormStateManager());

		expect(typeof result.current.rRule).toBe('string');
		expect(typeof result.current.exRule).toBe('string');
		expect(typeof result.current.rDates).toBe('object');
		expect(typeof result.current.exDates).toBe('object');

		expect(typeof result.current.dateDetails).toBe('object');
		expect(typeof result.current.tickets).toBe('object');
	});

	it('checks for the default form state', () => {
		const { result } = renderHook(() => useFormStateManager());

		expect(result.current.rRule).toBe('');
		expect(result.current.exRule).toBe('');
		expect(result.current.rDates).toEqual([]);
		expect(result.current.exDates).toEqual([]);

		expect(result.current.dateDetails).toEqual({});
		expect(result.current.tickets).toEqual({});
	});

	test('checks for rRule and exRule update', () => {
		const { result } = renderHook(() => useFormStateManager());

		expect(result.current.rRule).toBe('');
		expect(result.current.exRule).toBe('');
		const rRule = 'DTSTART:20200924T160446Z\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1;WKST=MO';
		act(() => {
			result.current.setRRule(rRule);
			result.current.setExRule(rRule);
		});
		expect(result.current.rRule).toBe(rRule);
		expect(result.current.exRule).toBe(rRule);

		// lets check the edge cases
		[null, undefined, '', 'SOME-R-RULE-STRING'].forEach((rRule) => {
			act(() => {
				result.current.setRRule(rRule);
				result.current.setExRule(rRule);
			});
			expect(result.current.rRule).toBe(rRule);
			expect(result.current.exRule).toBe(rRule);
		});
	});

	test('checks for rDates and exDates update', () => {
		const { result } = renderHook(() => useFormStateManager());

		expect(result.current.rDates).toEqual([]);
		expect(result.current.exDates).toEqual([]);
		const dateString = formatISO(new Date(2020, 9, 5));
		act(() => {
			result.current.addRDate(dateString);
			result.current.addExDate(dateString);
		});
		expect(result.current.rDates).toContain(dateString);
		expect(result.current.exDates).toContain(dateString);

		// lets check the edge cases
		[null, undefined, '', 'SOME-DATE-STRING'].forEach((dateString) => {
			act(() => {
				result.current.addRDate(dateString);
				result.current.addExDate(dateString);
			});
			expect(result.current.rDates).toContain(dateString);
			expect(result.current.exDates).toContain(dateString);
		});
		// lets remove the dates
		act(() => {
			result.current.removeRDate(dateString);
			result.current.removeExDate(dateString);
		});
		expect(result.current.rDates).not.toContain(dateString);
		expect(result.current.exDates).not.toContain(dateString);
	});

	test('checks for dateDetails update', () => {
		const { result } = renderHook(() => useFormStateManager());

		expect(result.current.dateDetails).toEqual({});
		const dateString = formatISO(new Date(2020, 9, 5));
		const dateDetails: DateFormShape = {
			name: 'Some date',
			id: 'some-id',
			startDate: dateString,
			endDate: dateString,
			duration: 2,
			unit: 'days',
		};
		act(() => {
			result.current.setDateDetails(dateDetails);
		});
		expect(result.current.dateDetails).toEqual(dateDetails);

		// lets update some fields
		const newDateDetails: DateFormShape = {
			name: 'Some New name',
			id: 'some-id',
			startDate: dateString,
			endDate: dateString,
			duration: 10,
			unit: 'weeks',
			capacity: 150,
		};
		for (const key in newDateDetails) {
			act(() => {
				result.current.updateDateField(key as keyof DateFormShape, newDateDetails[key]);
			});
			expect(result.current.dateDetails[key]).toEqual(newDateDetails[key]);
		}
	});

	test('checks for tickets update', () => {
		const { result } = renderHook(() => useFormStateManager());

		expect(result.current.tickets).toEqual({});
		const dateString = formatISO(new Date(2020, 9, 5));
		const ticketDetails: RemTicket = {
			id: '',
			dbId: 0,
			cacheId: '',
			name: 'Some Ticket',
			startDate: dateString,
			endDate: dateString,
			unit: 'days',
			isShared: true,
		};
		act(() => {
			result.current.addTicket(ticketDetails);
		});
		// the auto-generated id
		const ticketId = head(Object.keys(result.current.tickets));
		expect(result.current.tickets[ticketId]).toEqual({ ...ticketDetails, id: ticketId });

		// lets update
		const newTicketDetails: RemTicket = {
			...ticketDetails,
			name: 'Some new name for ticket',
			unit: 'months',
			isShared: false,
		};
		act(() => {
			result.current.updateTicket(ticketId, newTicketDetails);
		});
		expect(result.current.tickets[ticketId]).toEqual({ ...newTicketDetails, id: ticketId });

		// lets remove the ticket
		act(() => {
			result.current.deleteTicket(ticketId);
		});
		expect(result.current.tickets[ticketId]).toBeUndefined();

		// calling deleteTicket again does not have any effect
		act(() => {
			result.current.deleteTicket(ticketId);
		});
		expect(result.current.tickets[ticketId]).toBeUndefined();
	});

	test('checks for state reset', () => {
		const { result } = renderHook(() => useFormStateManager());

		const dateString = formatISO(new Date(2020, 9, 5));
		const dateDetails: DateFormShape = {
			name: 'Some date',
			id: 'some-id',
			startDate: dateString,
			endDate: dateString,
			duration: 2,
			unit: 'days',
		};
		const ticketDetails: RemTicket = {
			id: '',
			dbId: 0,
			cacheId: '',
			name: 'Some Ticket',
			startDate: dateString,
			endDate: dateString,
			unit: 'days',
			isShared: true,
		};
		act(() => {
			result.current.setRRule('THE STRING');
			result.current.setExRule('THE STRING');
			result.current.setDateDetails(dateDetails);
			result.current.addTicket(ticketDetails);
		});

		expect(result.current.tickets).not.toEqual({});
		expect(result.current.dateDetails).not.toEqual({});

		act(() => {
			result.current.reset();
		});

		expect(result.current.rRule).toBe('');
		expect(result.current.exRule).toBe('');
		expect(result.current.tickets).toEqual({});
		expect(result.current.dateDetails).toEqual({});
	});
});
