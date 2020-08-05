import { __, sprintf } from '@wordpress/i18n';
import { pick } from 'ramda';

import { CalendarOutlined, ControlOutlined, ProfileOutlined } from '@eventespresso/icons';
import type { EspressoFormProps, FieldProps } from '@eventespresso/form';
import { useMemoStringify } from '@eventespresso/hooks';
import { intervalsToOptions, Intervals, DATE_INTERVALS } from '@eventespresso/services';

import { validate } from './formValidation';
import { TicketFormShape } from './types';
import { TICKET_FIELDS_TO_USE } from '../../constants';
import { RemTicket } from '../../data';

type TicketFormConfig = EspressoFormProps<TicketFormShape>;

const TICKET_DEFAULTS: TicketFormShape = {
	ticketSalesStart: {
		position: 'before',
		startOrEnd: 'start',
		unit: 'months',
		unitValue: 1,
	},
	ticketSalesEnd: {
		position: 'before',
		startOrEnd: 'start',
		unit: 'days',
		unitValue: 1,
	},
	isShared: false,
};

const dateTimeFields: Array<FieldProps> = [
	{
		name: 'date',
		label: __('Date'),
		fieldType: 'datepicker',
		required: true,
	},
	{
		name: 'time',
		label: __('Time'),
		fieldType: 'timepicker',
		required: true,
	},
];

const unitOptions = intervalsToOptions(
	pick<Intervals, keyof Intervals>(['months', 'weeks', 'days', 'hours', 'minutes'], DATE_INTERVALS)
);

const ticketSalesFields: Array<FieldProps> = [
	{
		label: __('Unit value'),
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

const useTicketFormConfig = (ticket?: RemTicket, config?: Partial<TicketFormConfig>): TicketFormConfig => {
	const initialValues: TicketFormShape = {
		...TICKET_DEFAULTS,
		...config?.initialValues,
		...pick<Partial<RemTicket>, keyof RemTicket>(TICKET_FIELDS_TO_USE, ticket || {}),
	};
	const adjacentFormItemProps = useMemoStringify({
		className: 'ee-form-item-pair',
	});

	return {
		...config,
		initialValues,
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
				name: 'salesStart',
				icon: CalendarOutlined,
				title: __('Ticket Sales Start'),
				fields: [
					{
						name: 'dateTimeStart',
						label: '',
						fieldType: 'group',
						conditions: [{ field: 'isShared', compare: '=', value: true }],
						subFields: dateTimeFields,
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
						name: 'dateTimeEnd',
						label: '',
						fieldType: 'group',
						conditions: [{ field: 'isShared', compare: '=', value: true }],
						subFields: dateTimeFields,
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
						info: __(
							'If enabled, the ticket must be selected and will appear first in frontend ticket lists.'
						),
					},
					{
						name: 'isShared',
						label: __('Shared Ticket'),
						fieldType: 'switch',
						formControlProps: adjacentFormItemProps,
						info: __(
							'If enabled, a single ticket will be created and assigned to ALL datetimes generated by the recurrence editor. The shared ticket will therefore grant access to ALL of the datetimes. Otherwise a new ticket will be created and assigned to each datetime and only grant access to the datetime it is assigned to.'
						),
					},
				],
			},
		],
	};
};

export default useTicketFormConfig;
