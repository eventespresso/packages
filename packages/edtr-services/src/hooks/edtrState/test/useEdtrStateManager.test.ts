import { act, renderHook } from '@testing-library/react-hooks';

import useEdtrStateManager from '../useEdtrStateManager';

const EMPTY_VALUES = [null, undefined];

describe('useEdtrStateManager', () => {
	it('checks types for state values', () => {
		const { result } = renderHook(() => useEdtrStateManager());

		expect(typeof result.current.visibleDatetimeIds).toBe('object');
		expect(typeof result.current.visibleTicketIds).toBe('object');
		expect(typeof result.current.pricesPollInterval).toBe('number');
	});

	it('checks for the default state', () => {
		const { result } = renderHook(() => useEdtrStateManager());

		expect(result.current.visibleDatetimeIds).toEqual([]);
		expect(result.current.visibleTicketIds).toEqual([]);
		expect(result.current.pricesPollInterval).toBe(0);
	});

	test('checks for updated state', () => {
		const { result } = renderHook(() => useEdtrStateManager());

		// before the update
		expect(result.current.visibleDatetimeIds).toEqual([]);
		act(() => {
			result.current.setVisibleDatetimeIds(['xyz', 'abc']);
		});
		// after the update
		expect(result.current.visibleDatetimeIds).toEqual(['xyz', 'abc']);

		// edge cases
		[...EMPTY_VALUES, []].forEach((value) => {
			act(() => {
				result.current.setVisibleDatetimeIds(value);
			});
			expect(result.current.visibleDatetimeIds).toEqual(value);
		});

		// before the update
		expect(result.current.visibleTicketIds).toEqual([]);
		act(() => {
			result.current.setVisibleTicketIds(['xyz', 'abc']);
		});
		// after the update
		expect(result.current.visibleTicketIds).toEqual(['xyz', 'abc']);

		// edge cases
		[...EMPTY_VALUES, []].forEach((value) => {
			act(() => {
				result.current.setVisibleTicketIds(value);
			});
			expect(result.current.visibleTicketIds).toEqual(value);
		});

		// before the update
		expect(result.current.pricesPollInterval).toBe(0);
		act(() => {
			result.current.setPricesPollInterval(3);
		});
		// after the update
		expect(result.current.pricesPollInterval).toBe(3);

		// edge cases
		[...EMPTY_VALUES, 0, 100].forEach((value) => {
			act(() => {
				result.current.setPricesPollInterval(value);
			});
			expect(result.current.pricesPollInterval).toBe(value);
		});
	});
});
