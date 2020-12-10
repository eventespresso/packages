import React, { useMemo } from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { __ } from '@eventespresso/i18n';
import { Calendar, ControlOutlined, ProfileOutlined } from '@eventespresso/icons';
import { FormWithConfig } from '../../../components/src/FormWithConfig';
import FormWrapper from './FormWrapper';

export default {
	argTypes: {},
	title: 'Components/Form',
} as Meta;

// type HeadingStory = Story<HeadingProps>;

// const Template: HeadingStory = (args) => <Heading {...args}>I am a Heading</Heading>;

const onSubmit = () => null;

const formConfig = () => {
	return {
		onSubmit,
		subscription: {},
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
						fieldType: 'simple-text-editor',
					},
				],
			},
			{
				name: 'time',
				icon: Calendar,
				title: __('Time'),
				fields: [
					{
						name: 'startTime',
						label: __('Start Time'),
						fieldType: 'timepicker',
					},
				],
			},
			{
				name: 'length',
				icon: ProfileOutlined,
				inline: true,
				title: __('Length'),
				fields: [
					{
						name: 'duration',
						label: __('Duration'),
						fieldType: 'number',
						max: 1000,
						min: 1,
					},
					{
						name: 'unit',
						label: __('Unit'),
						fieldType: 'select',
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
					},
				],
			},
		],
	};
};

export const Default = () => {
	return <FormWithConfig {...formConfig} formWrapper={FormWrapper} />;
};
