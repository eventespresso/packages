import { RRuleStateManager as RSM } from '../state';
import { OnChangeInput } from '../components/types';
import { useCallback } from 'react';
export const getNumericValue = (value: unknown, defaultValue?: 0): number => {
	// Convert input from a string to a number
	const numericValue = Math.abs(value as number);
	// Check if is a number and is less than 1000
	return isNaN(numericValue) ? defaultValue : numericValue;
};

export const useIntervalUpdater = (
	repeatKey: Parameters<RSM['setRepeatInterval']>[0],
	setRepeatInterval: RSM['setRepeatInterval']
): OnChangeInput => {
	return useCallback(
		(event) => {
			setRepeatInterval(repeatKey, getNumericValue(event.target.value));
		},
		[repeatKey, setRepeatInterval]
	);
};
