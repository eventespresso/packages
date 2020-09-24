import { act, renderHook } from '@testing-library/react-hooks';

import useFilterStateManager from '../useFilterStateManager';

describe('TAM.useFilterStateManager', () => {
	it('checks types for state values', () => {
		const { result } = renderHook(() => useFilterStateManager());

		expect(typeof result.current.datesByMonth).toBe('object');
		expect(typeof result.current.datesByMonth[0]).toBe('number');

		expect(typeof result.current.showTrashedDates).toBe('boolean');
		expect(typeof result.current.showTrashedTickets).toBe('boolean');
		expect(typeof result.current.showExpiredTickets).toBe('boolean');
	});

	it('checks for the default filter state', () => {
		const { result } = renderHook(() => useFilterStateManager());

		expect(result.current.datesByMonth).toEqual([0, 0]);

		expect(result.current.showTrashedDates).toBe(false);
		expect(result.current.showTrashedTickets).toBe(false);
		expect(result.current.showExpiredTickets).toBe(false);
	});

	test('checks for updated filter state', () => {
		const { result } = renderHook(() => useFilterStateManager());

		act(() => {
			result.current.setDatesByMonth('2020:8');
		});
		expect(result.current.datesByMonth).toEqual([2020, 8]);

		act(() => {
			result.current.setShowTrashedDates(true);
		});
		expect(result.current.showTrashedDates).toBe(true);

		act(() => {
			result.current.setShowTrashedTickets(true);
		});
		expect(result.current.showTrashedTickets).toBe(true);

		act(() => {
			result.current.setShowExpiredTickets(true);
		});
		expect(result.current.showExpiredTickets).toBe(true);
	});
});
