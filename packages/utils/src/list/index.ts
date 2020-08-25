import type { OptionsType } from '@eventespresso/adapters';

/**
 * Converts entity list to options for select input
 * @param list The entity list
 * @param emptyOption empty option to display at the top
 */
export const entityListToSelectOptions = (list: Array<any>, emptyOption?: OptionsType[0]): OptionsType => {
	const options = emptyOption ? [emptyOption] : [];

	return [...options, ...list.map(({ id: value, name: label }) => ({ label, value }))];
};
