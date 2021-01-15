import { clone, compose, has, isNil, not, pickBy } from 'ramda';

import { AnyObject } from '../types';

export const removeNullAndUndefined = <T extends AnyObject>(filterable: T): T => {
	return pickBy(compose(not, isNil), filterable);
};

export const normalizeNumericFields = (numericFields: Array<string>, object: AnyObject) => {
	const output = clone(object);

	for (const field of numericFields) {
		if (has(field, output)) {
			output[field] = Number(output[field]);
		}
	}
	return output;
};
