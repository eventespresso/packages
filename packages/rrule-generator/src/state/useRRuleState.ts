import { useContext } from 'react';
import { StateContext } from '../context';
import type { RRuleStateManager } from './types';

const useRRuleState = (): RRuleStateManager => {
	return useContext(StateContext);
};

export default useRRuleState;
