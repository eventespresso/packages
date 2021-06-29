import * as R from 'ramda';

import { AnyObject } from '../types';
import { toBoolean } from '../converters';

export const removeNullAndUndefined = <T extends AnyObject>(filterable: T): T => {
	return R.pickBy(R.compose(R.not, R.isNil), filterable);
};

export const normalizeNumericFields = (numericFields: Array<string>, object: AnyObject) => {
	return normalizeFields(numericFields, object, Number);
};

export const normalizeBooleanFields = (booleanFields: Array<string>, object: AnyObject) => {
	return normalizeFields(booleanFields, object, toBoolean); // use toBoolean instead of Boolean
};

export const normalizeFields = <T extends Function>(fields: Array<string>, object: AnyObject, convert: T) => {
	const output = R.clone(object);

	for (const field of fields) {
		if (R.has(field, output)) {
			output[field] = convert(output[field]);
		}
	}
	return output;
};

export const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);
