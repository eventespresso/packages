import { useEffect } from 'react';

import { RRuleGeneratorProps } from '../components/types';
import useRRuleState from './useRRuleState';
import useRRuleConfig from './useRRuleConfig';
import { computeRRuleFromString, computeRRuleToString } from '../utils';

const useStateListener = ({ onChange, value, hideStart }: RRuleGeneratorProps): void => {
	const { hash, getData, setData } = useRRuleState();
	const config = useRRuleConfig();

	// Update/Initiate the state from value if it changes
	useEffect(() => {
		if (value) {
			const data = computeRRuleFromString(getData(), value);
			setData(data);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	/**
	 * When hash changes, it means state was changed as a result of user action
	 * So, we need to fire onChange
	 */
	useEffect(() => {
		const rRuleString = computeRRuleToString(getData(), config, hideStart);
		onChange(rRuleString);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hash]);
};

export default useStateListener;
