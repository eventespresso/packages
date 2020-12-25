import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Checkbox } from './';
import type { CheckboxProps } from '@eventespresso/adapters';

export default {
	argTypes: {},
	component: Checkbox,
	title: 'Components/Checkbox',
} as Meta;

type CheckboxStory = Story<CheckboxProps>;

const Template: CheckboxStory = (args) => <Checkbox {...args} label='Hello' />;

export const Basic: CheckboxStory = Template.bind({});

export const BasicWithDisableFalse: CheckboxStory = Template.bind({});
BasicWithDisableFalse.args = { isDisabled: false };
