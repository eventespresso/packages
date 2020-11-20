import { useMemo, useCallback } from 'react';
import { pick } from 'ramda';

import { CalendarOutlined, ControlOutlined, ProfileOutlined } from '@eventespresso/icons';
import { useUtcISOToSiteDate, useSiteDateToUtcISO } from '@eventespresso/services';
import { startAndEndDateFixer, useTicketItem } from '@eventespresso/edtr-services';
import { PLUS_ONE_MONTH } from '@eventespresso/constants';
import { useMemoStringify } from '@eventespresso/hooks';
import { setDefaultTime } from '@eventespresso/dates';
import { EntityId } from '@eventespresso/data';
import { __ } from '@eventespresso/i18n';
import type { EspressoFormProps } from '@eventespresso/form';
import type { Ticket } from '@eventespresso/edtr-services';

import { validate } from './formValidation';
import { TicketFormShape } from './types';

type TicketFormConfig = EspressoFormProps<TicketFormShape>;

const FIELD_NAMES: Array<keyof Ticket> = [
	'id',
	'description',
	'isDefault',
	'isRequired',
	'isTaxable',
	'isTrashed',
	'max',
	'min',
	'name',
	'price',
	'quantity',
	'uses',
];

const decorators = [startAndEndDateFixer];

const useTicketFormConfig = (id: EntityId, config?: EspressoFormProps): TicketFormConfig => {
	const ticket = useTicketItem({ id });

	const toUtcISO = useSiteDateToUtcISO();
	const toSiteDate = useUtcISOToSiteDate();

	const startDate = useMemoStringify(
		ticket?.startDate ? toSiteDate(ticket?.startDate) : setDefaultTime(PLUS_ONE_MONTH, 'start')
	);
	const endDate = useMemoStringify(
		ticket?.endDate ? toSiteDate(ticket?.endDate) : setDefaultTime(PLUS_ONE_MONTH, 'end')
	);

	const { onSubmit } = config;

	const onSubmitFrom: TicketFormConfig['onSubmit'] = useCallback(
		({ startDate, endDate, ...values }, form, ...restParams) => {
			return onSubmit(
				{ ...values, startDate: toUtcISO(startDate), endDate: toUtcISO(endDate) },
				form,
				...restParams
			);
		},
		[onSubmit, toUtcISO]
	);

	const initialValues: TicketFormShape = useMemo(
		() => ({
			...pick<Omit<Partial<Ticket>, 'prices'>, keyof Ticket>(FIELD_NAMES, ticket || {}),
			startDate,
			endDate,
		}),
		[endDate, startDate, ticket]
	);

	return useMemo(
		() => ({
			...config,
			onSubmit: onSubmitFrom,
			decorators,
			initialValues,
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
							fieldType: 'simple-text-editor',
						},
					],
				},
				{
					name: 'sales',
					icon: CalendarOutlined,
					title: __('Ticket Sales'),
					fields: [
						{
							name: 'startDate',
							label: __('Start Date'),
							fieldType: 'datetimepicker',
							required: true,
						},
						{
							name: 'endDate',
							label: __('End Date'),
							fieldType: 'datetimepicker',
							required: true,
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
							parseAsInfinity: true,
							max: 1000000,
							min: -1,
							info:
								__('The maximum number of this ticket available for sale.') +
								'\n' +
								__('Set to 0 to stop sales, or leave blank for no limit.'),
							width: 'small',
						},
						{
							name: 'uses',
							label: __('Number of Uses'),
							fieldType: 'number',
							parseAsInfinity: true,
							max: 1000,
							min: 0,
							info:
								__(
									'Controls the total number of times this ticket can be used, regardless of the number of dates it is assigned to.'
								) +
								'\n' +
								__(
									'Example: A ticket might have access to 4 different dates, but setting this field to 2 would mean that the ticket could only be used twice. Leave blank for no limit.'
								),
							width: 'small',
						},
						{
							name: 'min',
							label: __('Minimum Quantity'),
							fieldType: 'number',
							max: 1000000,
							min: 0,
							info:
								__(
									'The minimum quantity that can be selected for this ticket. Use this to create ticket bundles or graduated pricing.'
								) +
								'\n' +
								__('Leave blank for no minimum.'),
							width: 'small',
						},
						{
							name: 'max',
							label: __('Maximum Quantity'),
							fieldType: 'number',
							parseAsInfinity: true,
							max: 1000000,
							min: -1,
							info:
								__(
									'The maximum quantity that can be selected for this ticket. Use this to create ticket bundles or graduated pricing.'
								) +
								'\n' +
								__('Leave blank for no maximum.'),
							width: 'small',
						},
						{
							name: 'isRequired',
							label: __('Required Ticket'),
							fieldType: 'switch',
							info: __(
								'If enabled, the ticket must be selected and will appear first in frontend ticket lists.'
							),
							width: 'small',
						},
						{
							name: 'isDefault',
							label: __('Default Ticket'),
							fieldType: 'switch',
							info: __('If enabled, the ticket will appear on all new events.'),
							width: 'small',
						},
						{
							name: 'isTrashed',
							label: __('Trash'),
							fieldType: 'switch',
						},
					],
				},
			],
		}),
		[config, initialValues, onSubmitFrom]
	);
};

export default useTicketFormConfig;
