import * as R from 'ramda';

/**
 * Converts an input to number if and only if it's not null or undefined.
 */
export const safeNumber = R.unless(R.isNil, Number);
