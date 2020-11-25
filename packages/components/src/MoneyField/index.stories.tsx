import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { TextInput } from '../';
import { MoneyField } from './MoneyField';
import type { MoneyFieldProps } from './types';

export default {
	component: MoneyField,
	title: 'Components/MoneyField',
} as Meta;

type MoneyFieldStory = Story<MoneyFieldProps>;

const Template: MoneyFieldStory = (args) => {
	return (
		<MoneyField {...args} sign='$'>
			<TextInput />
		</MoneyField>
	);
};

export const SignBefore: MoneyFieldStory = Template.bind({});
SignBefore.args = { signB4: true };

export const SignAfter: MoneyFieldStory = Template.bind({});
SignAfter.args = { signB4: false };
