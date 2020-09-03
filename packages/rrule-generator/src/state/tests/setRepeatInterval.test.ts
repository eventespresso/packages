import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';
import { RRuleStateManager } from '../types';

describe('RRuleStateManager.setRepeatInterval', () => {
	it('updates the repeat interval to the passed value', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const repeatKeys: Array<Parameters<RRuleStateManager['setRepeatInterval']>[0]> = [
			'monthly',
			'weekly',
			'daily',
			'hourly',
		];

		let interval = 10;

		repeatKeys.forEach((repeatKey) => {
			const newInterval = interval++;
			act(() => {
				result.current.setRepeatInterval(repeatKey, newInterval);
			});

			expect(result.current.repeat?.[repeatKey]?.interval).toBe(newInterval);
		});
	});

	it('updates the repeat interval to null or undefined', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		[null, undefined].forEach((nextRepeatInterval) => {
			const repeatKeys: Array<Parameters<RRuleStateManager['setRepeatInterval']>[0]> = [
				'monthly',
				'weekly',
				'daily',
				'hourly',
			];

			repeatKeys.forEach((repeatKey) => {
				act(() => {
					result.current.setRepeatInterval(repeatKey, nextRepeatInterval);
				});

				expect(result.current.repeat?.[repeatKey]?.interval).toBe(nextRepeatInterval);
			});
		});
	});

	it('changes the value of hash', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevHash = result.current.hash;

		act(() => {
			result.current.setRepeatInterval('monthly', 67);
		});

		expect(result.current).toHaveProperty('hash');
		expect(typeof result.current.hash).toBe('string');
		expect(result.current.hash).not.toEqual(prevHash);
	});
});
