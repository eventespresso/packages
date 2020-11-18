import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from '../../';
import { ButtonProps } from '../types';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

type ButtonStory = Story<ButtonProps>;

const Template: ButtonStory = (args) => <Button {...args} />;

export const Primary: ButtonStory = Template.bind({});
Primary.args = {
	buttonText: 'Primary',
	buttonType: 'primary',
};

export const Secondary: ButtonStory = Template.bind({});
Secondary.args = {
	buttonText: 'Secondary',
	buttonType: 'secondary',
	size: 'small',
};

export const Big: ButtonStory = Template.bind({});
Big.args = {
	buttonText: 'Big',
	size: 'big',
};

export const Small: ButtonStory = Template.bind({});
Small.args = {
	buttonText: 'Small',
	size: 'small',
};
