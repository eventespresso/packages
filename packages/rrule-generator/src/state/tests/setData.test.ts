import { renderHook, act } from '@testing-library/react-hooks';

import { NOW } from '@eventespresso/constants';
import useRRuleStateManager from '../useRRuleStateManager';
import { DEFAULT_CONFIG } from '../../context';
import { getDefaultRRuleState } from '../../utils';

describe('RRuleStateManager.setData', () => {
	it('updates the state upon calling setData', () => {
		const defaultState = getDefaultRRuleState(DEFAULT_CONFIG);
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const updatedState = { ...defaultState, start: { date: NOW } };

		act(() => {
			result.current.setData(updatedState);
		});

		const state = result.current.getData();

		expect(state).toStrictEqual(updatedState);
	});

	it('does not change the value of hash', () => {
		const defaultState = getDefaultRRuleState(DEFAULT_CONFIG);
		const { result } = renderHook(() => useRRuleStateManager(DEFAULT_CONFIG));

		const hash = 'uRVUBt7BYBJguFYBJ';

		const updatedState = { ...defaultState, hash };

		act(() => {
			result.current.setData(updatedState);
		});

		const state = result.current.getData();

		expect(state.hash).toBe(hash);
	});
});
