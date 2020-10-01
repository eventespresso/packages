import { parsedAmount } from './';

/**
 * returns true if the two supplied values are equal after being parsed as floats
 *
 * @param {number|string} amount1
 * @param {number|string} amount2
 * @return {boolean}
 */
export const amountsMatch = (amount1: number | string, amount2: number | string): boolean => {
	return parsedAmount(amount1) === parsedAmount(amount2);
};
