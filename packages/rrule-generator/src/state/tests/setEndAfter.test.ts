import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';

describe('RRuleStateManager.setEndAfter', () => {
	it('updates the end after to the passed value', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		act(() => {
			result.current.setEndAfter(10);
		});

		expect(result.current.end.after).toBe(10);
	});

	it('updates the end after to null or undefined', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		[null, undefined].forEach((nextEndAfter) => {
			const prevEndAfter = result.current.end.after;

			act(() => {
				result.current.setEndAfter(nextEndAfter);
			});

			expect(result.current.end.after).not.toEqual(prevEndAfter);
			expect(result.current.end.after).toBe(nextEndAfter);
		});
	});

	it('changes the value of hash', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevHash = result.current.hash;

		act(() => {
			result.current.setEndAfter(78);
		});

		expect(result.current).toHaveProperty('hash');
		expect(typeof result.current.hash).toBe('string');
		expect(result.current.hash).not.toEqual(prevHash);
	});
});
