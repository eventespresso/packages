import * as R from 'ramda';

/**
 * Converts a comma separated list of capabilities to an array of string
 */
export const capsStr2Array = (caps: string): Array<string> => {
	return R.filter<string>(Boolean, R.map(R.trim, R.split(',', caps || '')));
};
