import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';

describe('RRuleStateManager.setEndDate', () => {
	it('updates the end date to the passed value', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevEndDate = result.current.end.date;
		const nextEndDate = new Date(2020, 8, 1);

		act(() => {
			result.current.setEndDate(nextEndDate);
		});

		expect(result.current.end.date).not.toEqual(prevEndDate);
		expect(result.current.end.date).toBe(nextEndDate);
	});

	it('updates the end date to null or undefined', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		[null, undefined].forEach((nextEndDate) => {
			const prevEndDate = result.current.end.date;

			act(() => {
				result.current.setEndDate(nextEndDate);
			});

			expect(result.current.end.date).not.toEqual(prevEndDate);
			expect(result.current.end.date).toBe(nextEndDate);
		});
	});

	it('changes the value of hash', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevHash = result.current.hash;

		act(() => {
			result.current.setEndDate(new Date());
		});

		expect(result.current).toHaveProperty('hash');
		expect(typeof result.current.hash).toBe('string');
		expect(result.current.hash).not.toEqual(prevHash);
	});
});
