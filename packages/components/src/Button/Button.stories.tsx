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

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	buttonText: 'Primary',
	buttonType: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	buttonText: 'Secondary',
	buttonType: 'secondary',
	size: 'small',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	buttonText: 'Small',
	size: 'small',
};
