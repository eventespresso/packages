import { useContext } from 'react';
import { ConfigContext } from '../context';
import type { RRuleConfig } from '../types';

const useRRuleConfig = (): RRuleConfig => {
	return useContext(ConfigContext);
};

export default useRRuleConfig;
