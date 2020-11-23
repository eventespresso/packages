import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';
import { NOW } from '@eventespresso/constants';

describe('RRuleStateManager.setStartDate', () => {
	it('updates the start date to the passed value', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevStartDate = result.current.start.date;
		const nextStartDate = new Date(2020, 8, 1);

		act(() => {
			result.current.setStartDate(nextStartDate);
		});

		expect(result.current.start.date).not.toEqual(prevStartDate);
		expect(result.current.start.date).toBe(nextStartDate);
	});

	it('updates the start date to null or undefined', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		[null, undefined].forEach((nextStartDate) => {
			const prevStartDate = result.current.start.date;

			act(() => {
				result.current.setStartDate(nextStartDate);
			});

			expect(result.current.start.date).not.toEqual(prevStartDate);
			expect(result.current.start.date).toBe(nextStartDate);
		});
	});

	it('changes the value of hash', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevHash = result.current.hash;

		act(() => {
			result.current.setStartDate(NOW);
		});

		expect(result.current).toHaveProperty('hash');
		expect(typeof result.current.hash).toBe('string');
		expect(result.current.hash).not.toEqual(prevHash);
	});
});
