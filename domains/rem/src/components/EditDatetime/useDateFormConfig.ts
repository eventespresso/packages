import { __ } from '@wordpress/i18n';
import { pick } from 'ramda';

import { ControlOutlined, ProfileOutlined } from '@eventespresso/icons';
import type { EspressoFormProps } from '@eventespresso/form';
import type { Datetime } from '@eventespresso/edtr-services';
import { validate } from './formValidation';
import { DateFormShape } from './types';

type DateFormConfig = EspressoFormProps<DateFormShape>;

const FIELD_NAMES: Array<keyof Datetime> = ['id', 'name', 'description'];

// required for RFF, but we don't need it.
const onSubmit = () => null;

const useDateFormConfig = (datetime: Datetime, config?: EspressoFormProps): DateFormConfig => {
	const { startDate: start, endDate: end, ...restProps } = datetime;

	const initialValues: DateFormShape = {
		...pick<Partial<Datetime>, keyof Datetime>(FIELD_NAMES, restProps),
	};

	const adjacentFormItemProps = {
		className: 'ee-form-item-pair',
	};

	return {
		...config,
		onSubmit,
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
						required: true,
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
				name: 'length',
				icon: ProfileOutlined,
				title: __('Length'),
				fields: [
					{
						name: 'duration',
						label: __('Duration'),
						fieldType: 'number',
					},
					{
						name: 'unit',
						label: __('Unit'),
						fieldType: 'select',
						options: [
							{
								label: 'day(s)',
								value: 'days',
							},
							{
								label: 'hour(s)',
								value: 'hours',
							},
							{
								label: 'minutes',
								value: 'minutess',
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
						name: 'capacity',
						label: __('Capacity'),
						fieldType: 'number',
						parseAsInfinity: true,
						min: -1,
						formControlProps: adjacentFormItemProps,
					},
				],
			},
		],
	};
};

export default useDateFormConfig;
