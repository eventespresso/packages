import type { Story, Meta } from '@storybook/react/types-6-0';

import { ConfirmClose } from '../';
import type { ConfirmProps } from './types';

export default {
	argTypes: {},
	component: ConfirmClose,
	title: 'Components/Confirm/ConfirmClose',
} as Meta;

type ConfirmStory = Story<ConfirmProps>;

const buttonProps = { buttonText: 'close' };

const Template: ConfirmStory = (args) => <ConfirmClose {...args} buttonProps={buttonProps} />;

export const Default: ConfirmStory = Template.bind({});
Default.args = {};
