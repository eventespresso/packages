import { useMemo, useCallback } from 'react';
import { pick } from 'ramda';

import { CalendarOutlined, ControlOutlined, ProfileOutlined } from '@eventespresso/icons';
import { startAndEndDateFixer, useDatetimeItem } from '@eventespresso/edtr-services';
import { useUtcISOToSiteDate, useSiteDateToUtcISO } from '@eventespresso/services';
import type { EspressoFormProps } from '@eventespresso/form';
import { PLUS_ONE_MONTH } from '@eventespresso/constants';
import { useMemoStringify } from '@eventespresso/hooks';
import { setDefaultTime } from '@eventespresso/dates';
import { EndDateFieldWrapper } from '@eventespresso/ee-components';
import { EntityId } from '@eventespresso/data';
import { __ } from '@eventespresso/i18n';
import type { Datetime, DateFormShape, DateFormConfig } from '@eventespresso/edtr-services';

import { validate } from './formValidation';

const FIELD_NAMES: Array<keyof Datetime> = ['id', 'name', 'description', 'capacity', 'isTrashed'];

const decorators = [startAndEndDateFixer];

const useDateFormConfig = (id: EntityId, config?: EspressoFormProps): DateFormConfig => {
	const datetime = useDatetimeItem({ id });

	const toUtcISO = useSiteDateToUtcISO();
	const toSiteDate = useUtcISOToSiteDate();

	const startDate = useMemoStringify(
		datetime?.startDate ? toSiteDate(datetime?.startDate) : setDefaultTime(PLUS_ONE_MONTH, 'start')
	);
	const endDate = useMemoStringify(
		datetime?.endDate ? toSiteDate(datetime?.endDate) : setDefaultTime(PLUS_ONE_MONTH, 'end')
	);

	const { onSubmit } = config;

	const onSubmitFrom: DateFormConfig['onSubmit'] = useCallback(
		async ({ startDate, endDate, ...values }, form, ...restParams) => {
			return await onSubmit(
				{ ...values, startDate: toUtcISO(startDate), endDate: toUtcISO(endDate) },
				form,
				...restParams
			);
		},
		[onSubmit, toUtcISO]
	);

	const initialValues: DateFormShape = useMemo(
		() => ({
			...pick<Partial<Datetime>, keyof Datetime>(FIELD_NAMES, datetime || {}),
			startDate,
			endDate,
		}),
		[datetime, endDate, startDate]
	);

	return useMemo(
		() => ({
			...config,
			onSubmit: onSubmitFrom,
			decorators,
			initialValues,
			subscription: {},
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
							fieldType: 'text',
							label: __('Name'),
							name: 'name',
						},
						{
							name: 'description',
							label: __('Description'),
							fieldType: 'simple-text-editor',
						},
					],
				},
				{
					name: 'dateTime',
					icon: CalendarOutlined,
					title: __('Dates'),
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
							wrapper: EndDateFieldWrapper,
						},
					],
				},
				{
					name: 'details',
					icon: ControlOutlined,
					title: __('Details'),
					fields: [
						{
							name: 'capacity',
							label: __('Capacity'),
							fieldType: 'number',
							parseAsInfinity: true,
							min: -1,
							info:
								__(
									'The maximum number of registrants that can attend the event at this particular date.'
								) +
								'\n' +
								__('Set to 0 to close registration or leave blank for no limit.'),
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

export default useDateFormConfig;
