import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';
import { MONTHS } from '../../constants';
import { Month } from '../../types';

describe('RRuleStateManager.setRepeatMonth', () => {
	it('updates the repeat month for yearly frequency for "ON" mode', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		Object.keys(MONTHS).forEach((month: Month) => {
			act(() => {
				result.current.setRepeatMonth('on', month);
			});

			expect(result.current.repeat.yearly.on.month).toBe(month);
		});
	});

	it('updates the repeat month for yearly frequency for "ON_THE" mode', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		Object.keys(MONTHS).forEach((month: Month) => {
			act(() => {
				result.current.setRepeatMonth('onThe', month);
			});

			expect(result.current.repeat.yearly.onThe.month).toBe(month);
		});
	});

	it('updates the repeat month to null or undefined', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		[null, undefined].forEach((nextRepeatMonth) => {
			act(() => {
				result.current.setRepeatMonth('on', nextRepeatMonth);
				result.current.setRepeatMonth('onThe', nextRepeatMonth);
			});

			expect(result.current.repeat.yearly.on.month).toBe(nextRepeatMonth);
			expect(result.current.repeat.yearly.onThe.month).toBe(nextRepeatMonth);
		});
	});

	it('changes the value of hash', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevHash = result.current.hash;

		act(() => {
			result.current.setRepeatMonth('on', 'Mar');
		});

		expect(result.current).toHaveProperty('hash');
		expect(typeof result.current.hash).toBe('string');
		expect(result.current.hash).not.toEqual(prevHash);
	});
});
