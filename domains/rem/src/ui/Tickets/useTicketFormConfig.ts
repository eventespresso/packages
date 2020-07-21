import { __, sprintf } from '@wordpress/i18n';

import { CalendarOutlined, ControlOutlined, ProfileOutlined } from '@eventespresso/icons';
import type { EspressoFormProps } from '@eventespresso/form';
import { useMemoStringify } from '@eventespresso/hooks';

import { validate } from './formValidation';
import { TicketFormShape } from './types';

type TicketFormConfig = EspressoFormProps<TicketFormShape>;

const useTicketFormConfig = (config?: Partial<TicketFormConfig>): TicketFormConfig => {
	const adjacentFormItemProps = useMemoStringify({
		className: 'ee-form-item-pair',
	});

	return {
		...config,
		onSubmit: config?.onSubmit,
		validate,
		layout: 'horizontal',
		debugFields: ['values', 'errors'],
		sections: [
			{
				name: 'basics',
				icon: ProfileOutlined,
				title: __('Basics'),
				fields: [
					{
						name: 'name',
						label: __('Name'),
						fieldType: 'text',
						min: 3,
						required: true,
					},
					{
						name: 'description',
						label: __('Description'),
						fieldType: 'textarea',
					},
				],
			},
			{
				name: 'sales',
				icon: CalendarOutlined,
				title: __('Ticket Sales'),
				fields: [
					{
						name: 'dateTime',
						label: '',
						fieldType: 'group',
						subFields: [
							{
								label: __('Unit value'),
								name: 'unitValue',
								fieldType: 'number',
								required: true,
							},
							{
								name: 'unit',
								label: __('Unit'),
								fieldType: 'select',
								options: [
									{
										label: 'month(s)',
										value: 'months',
									},
									{
										label: 'week(s)',
										value: 'weeks',
									},
									{
										label: 'day(s)',
										value: 'days',
									},
									{
										label: 'hour(s)',
										value: 'hours',
									},
									{
										label: 'minute(s)',
										value: 'minutes',
									},
								],
							},
							{
								name: 'position',
								label: __('Position'),
								fieldType: 'select',
								options: [
									{
										label: 'before',
										value: 'before',
									},
									{
										label: 'after',
										value: 'after',
									},
								],
							},
							{
								name: 'startOrEnd',
								label: __('Start/ end'),
								fieldType: 'select',
								options: [
									{
										label: 'start',
										value: 'start',
									},
									{
										label: 'end',
										value: 'end',
									},
								],
							},
						],
					},
				],
			},
			{
				name: 'details',
				icon: ControlOutlined,
				title: __('Details'),
				fields: [
					{
						name: 'quantity',
						label: __('Quantity For Sale'),
						fieldType: 'number',
						formControlProps: adjacentFormItemProps,
						parseAsInfinity: true,
						min: -1,
						info: sprintf(
							__(
								'The maximum number of this ticket available for sale.%sSet to 0 to stop sales, or leave blank for no limit.'
							),
							'\n'
						),
					},
					{
						name: 'uses',
						label: __('Number of Uses'),
						fieldType: 'number',
						parseAsInfinity: true,
						formControlProps: adjacentFormItemProps,
						min: 0,
						info: sprintf(
							__(
								'Controls the total number of times this ticket can be used, regardless of the number of dates it is assigned to.%sExample: A ticket might have access to 4 different dates, but setting this field to 2 would mean that the ticket could only be used twice. Leave blank for no limit.'
							),
							'\n'
						),
					},
					{
						name: 'min',
						label: __('Minimum Quantity'),
						fieldType: 'number',
						formControlProps: adjacentFormItemProps,
						min: 0,
						info: sprintf(
							__(
								'The minimum quantity that can be selected for this ticket. Use this to create ticket bundles or graduated pricing.%sLeave blank for no minimum.'
							),
							'\n'
						),
					},
					{
						name: 'max',
						label: __('Maximum Quantity'),
						fieldType: 'number',
						parseAsInfinity: true,
						formControlProps: adjacentFormItemProps,
						min: -1,
						info: sprintf(
							__(
								'The maximum quantity that can be selected for this ticket. Use this to create ticket bundles or graduated pricing.%sLeave blank for no maximum.'
							),
							'\n'
						),
					},
					{
						name: 'isRequired',
						label: __('Required Ticket'),
						fieldType: 'switch',
						formControlProps: adjacentFormItemProps,
						info: __('If enabled, the ticket will appear first in frontend ticket lists.'),
					},
				],
			},
		],
	};
};

export default useTicketFormConfig;
