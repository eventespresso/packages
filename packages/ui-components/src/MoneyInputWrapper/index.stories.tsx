import type { Story, Meta } from '@storybook/react/types-6-0';

import { TextInput } from '..';
import { MoneyInputWrapper } from './MoneyInputWrapper';
import type { MoneyInputWrapperProps } from './types';

export default {
	component: MoneyInputWrapper,
	title: 'Components/MoneyInputWrapper',
} as Meta;

type MoneyInputWrapperStory = Story<MoneyInputWrapperProps>;

const Template: MoneyInputWrapperStory = (args) => {
	return (
		<MoneyInputWrapper {...args} sign='$'>
			<TextInput />
		</MoneyInputWrapper>
	);
};

export const SignBefore: MoneyInputWrapperStory = Template.bind({});
SignBefore.args = { signB4: true };

export const SignAfter: MoneyInputWrapperStory = Template.bind({});
SignAfter.args = { signB4: false };
