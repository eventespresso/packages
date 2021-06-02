import { pick } from 'ramda';

import { __ } from '@eventespresso/i18n';
import { intervalsToOptions, DATE_INTERVALS } from '@eventespresso/dates';

import type { Intervals } from '@eventespresso/dates';
import type { FieldProps } from '@eventespresso/form';

const unitOptions = intervalsToOptions(
	pick<Intervals, keyof Intervals>(['months', 'weeks', 'days', 'hours', 'minutes'], DATE_INTERVALS)
);

export const ticketSalesEndFields: Array<FieldProps> = [
	{
		label: __('Duration'),
		name: 'unitValue',
		fieldType: 'number',
		required: true,
		min: 0,
	},
	{
		name: 'unit',
		label: __('Unit'),
		fieldType: 'select',
		required: true,
		options: unitOptions,
	},
	{
		name: 'position',
		label: __('Position'),
		fieldType: 'select',
		required: true,
		options: [
			{
				label: __('before'),
				value: 'before',
			},
			{
				label: __('after'),
				value: 'after',
			},
		],
	},
	{
		name: 'startOrEnd',
		label: __('Start/ end'),
		fieldType: 'select',
		required: true,
		options: [
			{
				label: __('start'),
				value: 'start',
			},
			{
				label: __('end'),
				value: 'end',
			},
		],
	},
];
