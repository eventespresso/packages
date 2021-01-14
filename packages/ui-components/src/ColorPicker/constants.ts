import { __ } from '@eventespresso/i18n';

import { PresetColor } from './types';

export const BLACK_COLOR = '#000000';

/**
 * Copied from @wordpress/block-editor
 */
export const PRESET_COLORS: Array<PresetColor> = [
	{
		name: __('Black'),
		color: BLACK_COLOR,
	},
	{
		name: __('Cyan bluish gray'),
		color: '#abb8c3',
	},
	{
		name: __('White'),
		color: '#ffffff',
	},
	{
		name: __('Pale pink'),
		color: '#f78da7',
	},
	{
		name: __('Vivid red'),
		color: '#cf2e2e',
	},
	{
		name: __('Luminous vivid orange'),
		color: '#ff6900',
	},
	{
		name: __('Luminous vivid amber'),
		color: '#fcb900',
	},
	{
		name: __('Light green cyan'),
		color: '#7bdcb5',
	},
	{
		name: __('Vivid green cyan'),
		color: '#00d084',
	},
	{
		name: __('Pale cyan blue'),
		color: '#8ed1fc',
	},
	{
		name: __('Vivid cyan blue'),
		color: '#0693e3',
	},
	{
		name: __('Vivid purple'),
		color: '#9b51e0',
	},
];
