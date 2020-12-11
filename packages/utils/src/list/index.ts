import { pluck } from 'ramda';

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

/**
 * Converts select options to a flat array of option values
 */
export const getOptionValues = (allOptions: OptionsType): Array<string> => {
	return allOptions
		.map(({ options, value }) => (options ? pluck('value', options) : [value]))
		.flat()
		.filter(Boolean);
};
