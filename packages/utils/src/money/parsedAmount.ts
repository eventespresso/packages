import type { Amount } from './types';

/**
 * returns amount parsed as a float (if not already a number)
 *
 * @param {number|string} amount
 * @return {number}
 */
export const parsedAmount = (amount: Amount): number => {
	return typeof amount === 'number' ? amount : Number.parseFloat(amount);
};
