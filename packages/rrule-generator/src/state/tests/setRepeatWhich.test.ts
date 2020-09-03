import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';
import { WHICH } from '../../constants';
import { Which } from '../../types';

describe('RRuleStateManager.setRepeatWhich', () => {
	it('updates the repeat which for yearly frequency', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		Object.keys(WHICH).forEach((which: Which) => {
			act(() => {
				result.current.setRepeatWhich('yearly', which);
			});

			expect(result.current.repeat.yearly.onThe.which).toBe(which);
		});
	});

	it('updates the repeat which for monthly frequency', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		Object.keys(WHICH).forEach((which: Which) => {
			act(() => {
				result.current.setRepeatWhich('monthly', which);
			});

			expect(result.current.repeat.monthly.onThe.which).toBe(which);
		});
	});

	it('updates the repeat which to null or undefined', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		[null, undefined].forEach((nextRepeatWhich) => {
			act(() => {
				result.current.setRepeatWhich('monthly', nextRepeatWhich);
			});

			expect(result.current.repeat.monthly.onThe.which).toBe(nextRepeatWhich);
		});
	});

	it('changes the value of hash', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevHash = result.current.hash;

		act(() => {
			result.current.setRepeatWhich('monthly', 'THIRD');
		});

		expect(result.current).toHaveProperty('hash');
		expect(typeof result.current.hash).toBe('string');
		expect(result.current.hash).not.toEqual(prevHash);
	});
});
