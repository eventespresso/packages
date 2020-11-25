import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { TextInput } from '../';
import { InputWithLabel, InputWithLabelProps } from './';

export default {
	component: InputWithLabel,
	title: 'Components/InputWithLabel',
} as Meta;

type InputWithLabelStory = Story<InputWithLabelProps>;

const Template: InputWithLabelStory = (args) => {
	return (
		<InputWithLabel {...args} label='label'>
			{<TextInput />}
		</InputWithLabel>
	);
};

export const Default: InputWithLabelStory = Template.bind({});

export const LeftPositionedLabel: InputWithLabelStory = Template.bind({});
LeftPositionedLabel.args = { labelPosition: 'left' };

export const RightPositionedLabel: InputWithLabelStory = Template.bind({});
RightPositionedLabel.args = { labelPosition: 'right' };
