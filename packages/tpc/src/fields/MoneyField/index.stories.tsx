import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { noop } from '@eventespresso/utils';
import { BaseNumberInputField } from '../';
import { MoneyField } from './MoneyField';
import type { MoneyFieldProps } from './types';

export default {
	component: MoneyField,
	title: 'Components/MoneyField',
} as Meta;

type MoneyFieldStory = Story<MoneyFieldProps>;

const Template: MoneyFieldStory = (args) => {
	return (
		<MoneyField
			{...args}
			input={<BaseNumberInputField aria-label='label' getValue={noop} name='money-field' setValue={noop} />}
			sign='$'
		/>
	);
};

export const SignBefore: MoneyFieldStory = Template.bind({});
SignBefore.args = { signB4: true };

export const SignAfter: MoneyFieldStory = Template.bind({});
SignAfter.args = { signB4: false };
