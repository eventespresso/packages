import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';

describe('RRuleStateManager.setEndMode', () => {
	it('updates the end mode to the passed value', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		act(() => {
			result.current.setEndMode('ON_DATE');
		});

		expect(result.current.end.mode).not.toEqual('AFTER');
		expect(result.current.end.mode).toBe('ON_DATE');
	});

	it('updates the end mode to null or undefined', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		[null, undefined].forEach((nextEndMode) => {
			const prevEndMode = result.current.end.mode;

			act(() => {
				result.current.setEndMode(nextEndMode);
			});

			expect(result.current.end.mode).not.toEqual(prevEndMode);
			expect(result.current.end.mode).toBe(nextEndMode);
		});
	});

	it('changes the value of hash', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevHash = result.current.hash;

		act(() => {
			result.current.setEndMode('NEVER');
		});

		expect(result.current).toHaveProperty('hash');
		expect(typeof result.current.hash).toBe('string');
		expect(result.current.hash).not.toEqual(prevHash);
	});
});
