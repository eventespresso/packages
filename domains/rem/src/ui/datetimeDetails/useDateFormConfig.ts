import { __ } from '@wordpress/i18n';

import { ControlOutlined, ProfileOutlined } from '@eventespresso/icons';
import type { EspressoFormProps } from '@eventespresso/form';
import { validate } from './formValidation';
import { DateFormShape } from './types';

type DateFormConfig = EspressoFormProps<DateFormShape>;

// required for RFF, but we don't need it.
const onSubmit = () => null;

const useDateFormConfig = (config?: EspressoFormProps): DateFormConfig => {
	const initialValues: DateFormShape = {};

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
								value: 'minutes',
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
