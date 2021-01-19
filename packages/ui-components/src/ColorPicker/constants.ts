import { __ } from '@eventespresso/i18n';

import { PresetColor } from './types';

export const BLACK_COLOR = 'rgb(0,0,0)';

export const PRESET_COLORS: Array<PresetColor> = [
	{
		name: __('Black'),
		color: BLACK_COLOR,
	},
	{
		name: __('Cyan bluish gray'),
		color: 'rgb(171,184,195)',
	},
	{
		name: __('White'),
		color: 'rgb(255,255,255)',
	},
	{
		name: __('Pale pink'),
		color: 'rgb(247,141,167)',
	},
	{
		name: __('Vivid red'),
		color: 'rgb(207,46,46)',
	},
	{
		name: __('Luminous vivid orange'),
		color: 'rgb(255,105,0)',
	},
	{
		name: __('Luminous vivid amber'),
		color: 'rgb(252,185,0)',
	},
	{
		name: __('Light green cyan'),
		color: 'rgb(123,220,181)',
	},
	{
		name: __('Vivid green cyan'),
		color: 'rgb(0,208,132)',
	},
	{
		name: __('Pale cyan blue'),
		color: 'rgb(142,209,252)',
	},
	{
		name: __('Vivid cyan blue'),
		color: 'rgb(6,147,227)',
	},
	{
		name: __('Vivid purple'),
		color: 'rgb(155,81,224)',
	},
];
