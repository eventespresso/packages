import { renderHook, act } from '@testing-library/react-hooks';

import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';
import { getDefaultRRuleState } from '../../utils';

describe('RRuleStateManager.getData', () => {
	it('returns the initial state', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const state = result.current.getData();

		expect(state).toHaveProperty('start');
		expect(state).toHaveProperty('end');
		expect(state).toHaveProperty('repeat');
	});

	it('returns the state set via setData', () => {
		const defaultState = getDefaultRRuleState(DEFAULT_CONFIG);
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		act(() => {
			result.current.setData(defaultState);
		});

		const state = result.current.getData();

		expect(state).toEqual(defaultState);
	});

	it('returns the updated state when it is mutated', () => {
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const prevState = result.current.getData();

		act(() => {
			result.current.setEndMode('ON_DATE');
			result.current.setRepeatFrequency('DAILY');
		});

		const nextState = result.current.getData();

		expect(prevState).not.toEqual(nextState);
		// hash must have changed.
		expect(prevState.hash).not.toBe(nextState.hash);
		// check for changed values
		expect(nextState.end.mode).toBe('ON_DATE');
		expect(nextState.repeat.frequency).toBe('DAILY');
	});
});
