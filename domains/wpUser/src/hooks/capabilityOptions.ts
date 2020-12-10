import { __ } from '@eventespresso/i18n';
import type { OptionsType } from '@eventespresso/adapters';

// TODO read these options from DOM data
const dynamiccapabilityOptions = [
	{
		value: 'read',
		label: __('Read'),
	},
	{
		value: 'access_s2member_level0',
		label: __('Level 0'),
	},
	{
		value: 'access_s2member_level1',
		label: __('Level 1'),
	},
	{
		value: 'access_s2member_level2',
		label: __('Level 2'),
	},
	{
		value: 'access_s2member_level3',
		label: __('Level 3'),
	},
	{
		value: 'access_s2member_level4',
		label: __('Level 4'),
	},
];

export const capabilityOptions: OptionsType = [
	{
		value: 'none',
		label: __('None'),
	},
	...dynamiccapabilityOptions,
	{
		value: 'custom',
		label: __('Custom'),
	},
];
