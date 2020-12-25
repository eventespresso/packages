import type { Story, Meta } from '@storybook/react/types-6-0';

import { ConfirmDelete } from '../';
import type { ConfirmProps } from './types';

export default {
	argTypes: {},
	component: ConfirmDelete,
	title: 'Components/Confirm/ConfirmDelete',
} as Meta;

type ConfirmStory = Story<ConfirmProps>;

const buttonProps = { buttonText: 'delete' };

const Template: ConfirmStory = (args) => <ConfirmDelete {...args} buttonProps={buttonProps} />;

export const Default: ConfirmStory = Template.bind({});
Default.args = {};
