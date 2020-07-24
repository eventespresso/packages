import { useContext } from 'react';
import { StateContext } from '../context';
import type { RRuleStateManager } from '../state/types';

const useRRuleState = (): RRuleStateManager => {
	return useContext(StateContext);
};

export default useRRuleState;
