import { filter, map, trim, split } from 'ramda';

/**
 * Converts a comma separated list of capabilities to an array of string
 */
export const capsStr2Array = (caps: string): Array<string> => {
	return filter<string>(Boolean, map(trim, split(',', caps || '')));
};
