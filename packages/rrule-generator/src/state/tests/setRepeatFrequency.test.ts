import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';
import { FREQUENCY } from '../../constants';
import { Frequency } from '../../types';

describe('RRuleStateManager.setRepeatFrequency', () => {
	it('updates the repeat frequency to the passed value', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		Object.keys(FREQUENCY).forEach((frequency: Frequency) => {
			act(() => {
				result.current.setRepeatFrequency(frequency);
			});

			expect(result.current.repeat.frequency).toBe(frequency);
		});
	});

	it('updates the repeat frequency to null or undefined', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		[null, undefined].forEach((nextRepeatFrequency) => {
			const prevRepeatFrequency = result.current.repeat.frequency;

			act(() => {
				result.current.setRepeatFrequency(nextRepeatFrequency);
			});

			expect(result.current.repeat.frequency).not.toEqual(prevRepeatFrequency);
			expect(result.current.repeat.frequency).toBe(nextRepeatFrequency);
		});
	});

	it('changes the value of hash', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevHash = result.current.hash;

		act(() => {
			result.current.setRepeatFrequency('WEEKLY');
		});

		expect(result.current).toHaveProperty('hash');
		expect(typeof result.current.hash).toBe('string');
		expect(result.current.hash).not.toEqual(prevHash);
	});
});
