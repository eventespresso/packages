import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';

describe('RRuleStateManager.setRepeatDay', () => {
	it('updates the repeat day for yearly frequency for "ON" mode', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		act(() => {
			result.current.setRepeatDay('yearly', 'on', 23);
		});

		expect(result.current.repeat.yearly.on.day).toBe(23);
	});

	it('updates the repeat day for yearly frequency for "ON_THE" mode', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		act(() => {
			result.current.setRepeatDay('yearly', 'onThe', 'TH');
		});

		expect(result.current.repeat.yearly.onThe.day).toBe('TH');
	});

	it('updates the repeat day for monthly frequency for "ON" mode', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		act(() => {
			result.current.setRepeatDay('monthly', 'on', 23);
		});

		expect(result.current.repeat.monthly.on.day).toBe(23);
	});

	it('updates the repeat day for monthly frequency for "ON_THE" mode', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		act(() => {
			result.current.setRepeatDay('monthly', 'onThe', 'TH');
		});

		expect(result.current.repeat.monthly.onThe.day).toBe('TH');
	});

	it('updates the repeat day to null or undefined', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		[null, undefined].forEach((nextRepeatDay) => {
			act(() => {
				result.current.setRepeatDay('yearly', 'on', nextRepeatDay);
				result.current.setRepeatDay('yearly', 'onThe', nextRepeatDay);
			});

			expect(result.current.repeat.yearly.onThe.day).toBe(nextRepeatDay);
			expect(result.current.repeat.yearly.on.day).toBe(nextRepeatDay);
		});
	});

	it('changes the value of hash', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevHash = result.current.hash;

		act(() => {
			result.current.setRepeatDay('monthly', 'on', 26);
		});

		expect(result.current).toHaveProperty('hash');
		expect(typeof result.current.hash).toBe('string');
		expect(result.current.hash).not.toEqual(prevHash);
	});
});
