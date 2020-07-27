import { RRuleStateManager as RSM } from '../state';
import { OnChangeInput } from '../components/types';
export const getNumericValue = (value: unknown, defaultValue?: 0): number => {
	// Convert input from a string to a number
	const numericValue = +value;
	// Check if is a number and is less than 1000
	return isNaN(numericValue) ? defaultValue : numericValue;
};

export const getIntervalUpdater = (
	repeatKey: Parameters<RSM['setRepeatInterval']>[0],
	setRepeatInterval: RSM['setRepeatInterval']
): OnChangeInput => (event) => {
	setRepeatInterval(repeatKey, getNumericValue(event.target.value));
};
