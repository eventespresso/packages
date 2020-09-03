import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';
import { WeeklyRepeatOption } from '../../types';

describe('RRuleStateManager.setRepeatWeeklyDays', () => {
	it('updates the weekly days', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const activeDays: WeeklyRepeatOption['days'] = {
			MO: false,
			TU: true,
			WE: true,
			TH: false,
			FR: true,
			SA: false,
			SU: true,
		};

		act(() => {
			result.current.setRepeatWeeklyDays(activeDays);
		});

		Object.entries(result.current.repeat.weekly.days).forEach(([day, isActive]) => {
			expect(result.current.repeat.weekly.days?.[day]).toBe(isActive);
		});
	});

	it('passing null or undefined does not affect the weekly days', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		[null, undefined].forEach((nextWeeklyDays) => {
			act(() => {
				result.current.setRepeatWeeklyDays(nextWeeklyDays);
			});

			expect(result.current.repeat.weekly.days).not.toEqual(nextWeeklyDays);
		});
	});

	it('changes the value of hash', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevHash = result.current.hash;

		act(() => {
			result.current.setRepeatWeeklyDays(null);
		});

		expect(result.current).toHaveProperty('hash');
		expect(typeof result.current.hash).toBe('string');
		expect(result.current.hash).not.toEqual(prevHash);
	});
});
