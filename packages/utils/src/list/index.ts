import type { OptionsType } from '@eventespresso/adapters';
import { AnyObject } from '../types';

/**
 * Converts entity list to options for select input
 * @param list The entity list
 * @param emptyOption empty option to display at the top
 */
export const entityListToSelectOptions = (list: Array<any>, emptyOption?: OptionsType[0]): OptionsType => {
	const options = emptyOption ? [emptyOption] : [];

	return [...options, ...list.map(({ id: value, name: label }) => ({ label, value }))];
};

/**
 * Converts a key-value object to options for select input
 */
export const objectToSelectOptions = (object: AnyObject, prependEmpty?: boolean): OptionsType => {
	const options = Object.entries(object).map(([value, label]) => ({ value, label }));

	if (prependEmpty) {
		return [{ label: '', value: '' }, ...options];
	}

	return options;
};
