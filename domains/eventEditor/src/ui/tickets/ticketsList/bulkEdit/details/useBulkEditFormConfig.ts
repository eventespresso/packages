import { useMemo, useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import { pick } from 'ramda';

import { CalendarOutlined, ControlOutlined, ProfileOutlined } from '@eventespresso/icons';
import { intervalsToOptions, Intervals, DATE_INTERVALS } from '@eventespresso/utils';
import type { EspressoFormProps } from '@eventespresso/form';

import { validate } from './formValidation';
import type { BulkEditFormShape } from './types';
import { useMemoStringify } from '@eventespresso/hooks';

type DateFormConfig = EspressoFormProps<BulkEditFormShape>;

const unitOptions = intervalsToOptions(
	pick<Intervals, keyof Intervals>(['months', 'weeks', 'days', 'hours', 'minutes'], DATE_INTERVALS),
	true
);

const useBulkEditFormConfig = (config?: EspressoFormProps<BulkEditFormShape>): DateFormConfig => {
	const { onSubmit } = config;

	const onSubmitFrom: DateFormConfig['onSubmit'] = useCallback(
		(values, form, ...restParams) => {
			return onSubmit(values, form, ...restParams);
		},
		[onSubmit]
	);

	const adjacentFormItemProps = useMemoStringify({
		className: 'ee-form-item-pair',
	});

	return useMemo(
		() => ({
			...config,
			onSubmit: onSubmitFrom,
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
						},
						{
							name: 'description',
							label: __('Description'),
							fieldType: 'textarea',
						},
					],
				},
				{
					name: 'dates',
					icon: CalendarOutlined,
					title: __('Dates'),
					fields: [
						{
							name: 'shiftDates',
							label: __('Shift dates'),
							fieldType: 'group',
							formControlProps: {
								className: 'shift-dates',
							},
							subFields: [
								{
									name: 'value',
									fieldType: 'number',
									min: 1,
								},
								{
									name: 'unit',
									fieldType: 'select',
									options: unitOptions,
								},
								{
									name: 'type',
									fieldType: 'select',
									options: [
										{
											label: '',
											value: '',
										},
										{
											label: __('earlier'),
											value: 'earlier',
										},
										{
											label: __('later'),
											value: 'later',
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
						},
						{
							name: 'uses',
							label: __('Number of Uses'),
							fieldType: 'number',
							parseAsInfinity: true,
							formControlProps: adjacentFormItemProps,
							min: 0,
						},
						{
							name: 'min',
							label: __('Minimum Quantity'),
							fieldType: 'number',
							formControlProps: adjacentFormItemProps,
							min: 0,
						},
						{
							name: 'max',
							label: __('Maximum Quantity'),
							fieldType: 'number',
							parseAsInfinity: true,
							formControlProps: adjacentFormItemProps,
							min: -1,
						},
						{
							name: 'isRequired',
							label: __('Required Ticket'),
							fieldType: 'switch',
							formControlProps: adjacentFormItemProps,
						},
					],
				},
			],
		}),
		[adjacentFormItemProps, config, onSubmitFrom]
	);
};

export default useBulkEditFormConfig;
