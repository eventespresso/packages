import { __ } from '@eventespresso/i18n';
import { CalendarOutlined } from '@eventespresso/icons';

import { formConfig } from '../config';
import type { FieldProps } from '../';

const ticketSalesFields: Array<FieldProps> = [
	{
		label: __('Duration'),
		name: 'unitValue',
		fieldType: 'number',
		required: true,
		min: 1,
	},
	{
		name: 'unit',
		label: __('Unit'),
		fieldType: 'select',
		required: true,
		options: [],
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

const storyConfig = {
	...formConfig,
	sections: [
		...formConfig.sections,
		{
			name: 'salesStart',
			icon: CalendarOutlined,
			title: __('Ticket Sales Start'),
			fields: [
				{
					name: 'ticketSalesDates.startDate' as 'startDate',
					label: '',
					fieldType: 'datetimepicker',
					conditions: [{ field: 'isShared', compare: '=', value: true }],
				},
				{
					name: 'ticketSalesStart',
					label: '',
					fieldType: 'group',
					conditions: [{ field: 'isShared', compare: '=', value: false }],
					subFields: ticketSalesFields,
				},
			],
		},
		{
			name: 'salesEnd',
			icon: CalendarOutlined,
			title: __('Ticket Sales End'),
			fields: [
				{
					name: 'ticketSalesDates.endDate' as 'endDate',
					label: '',
					fieldType: 'datetimepicker',
					conditions: [{ field: 'isShared', compare: '=', value: true }],
				},
				{
					name: 'ticketSalesEnd',
					label: '',
					fieldType: 'group',
					conditions: [{ field: 'isShared', compare: '=', value: false }],
					subFields: ticketSalesFields,
				},
			],
		},
	],
};

export default storyConfig;
