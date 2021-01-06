import { clone, compose, filter, has, isNil, not } from 'ramda';

import { AnyObject } from '../types';

export const removeNullAndUndefined = <T>(filterable: AnyObject<T>): AnyObject<T> => {
	return filter<T>(compose(not, isNil), filterable);
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
