import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';

describe('RRuleStateManager.setRepeatMode', () => {
	it('updates the repeat mode to the passed value for monthly requency', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		act(() => {
			result.current.setRepeatMode('monthly', 'ON_THE');
		});
		expect(result.current.repeat.monthly.mode).not.toEqual('ON');
		expect(result.current.repeat.monthly.mode).toBe('ON_THE');

		act(() => {
			result.current.setRepeatMode('monthly', 'ON');
		});
		expect(result.current.repeat.monthly.mode).not.toEqual('ON_THE');
		expect(result.current.repeat.monthly.mode).toBe('ON');
	});

	it('updates the repeat mode to the passed value for yearly requency', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		act(() => {
			result.current.setRepeatMode('yearly', 'ON_THE');
		});
		expect(result.current.repeat.yearly.mode).not.toEqual('ON');
		expect(result.current.repeat.yearly.mode).toBe('ON_THE');

		act(() => {
			result.current.setRepeatMode('yearly', 'ON');
		});
		expect(result.current.repeat.yearly.mode).not.toEqual('ON_THE');
		expect(result.current.repeat.yearly.mode).toBe('ON');
	});

	it('updates the repeat mode to null or undefined', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		[null, undefined].forEach((nextRepeatMode) => {
			act(() => {
				result.current.setRepeatMode('yearly', nextRepeatMode);
			});
			expect(result.current.repeat.yearly.mode).toBe(nextRepeatMode);

			act(() => {
				result.current.setRepeatMode('monthly', nextRepeatMode);
			});
			expect(result.current.repeat.monthly.mode).toBe(nextRepeatMode);
		});
	});

	it('changes the value of hash', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevHash = result.current.hash;

		act(() => {
			result.current.setRepeatMode('monthly', 'ON_THE');
		});

		expect(result.current).toHaveProperty('hash');
		expect(typeof result.current.hash).toBe('string');
		expect(result.current.hash).not.toEqual(prevHash);
	});
});
