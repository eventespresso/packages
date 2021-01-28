import { clone, compose, has, isNil, not, pickBy } from 'ramda';

import { AnyObject } from '../types';
import { toBoolean } from '../converters';

export const removeNullAndUndefined = <T extends AnyObject>(filterable: T): T => {
	return pickBy(compose(not, isNil), filterable);
};

export const normalizeNumericFields = (numericFields: Array<string>, object: AnyObject) => {
	return normalizeFields(numericFields, object, Number);
};

export const normalizeBooleanFields = (booleanFields: Array<string>, object: AnyObject) => {
	return normalizeFields(booleanFields, object, toBoolean); // use toBoolean instead of Boolean
};

export const normalizeFields = <T extends Function>(fields: Array<string>, object: AnyObject, convert: T) => {
	const output = clone(object);

	for (const field of fields) {
		if (has(field, output)) {
			output[field] = convert(output[field]);
		}
	}
	return output;
};
