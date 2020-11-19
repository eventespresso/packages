import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { ConfirmDelete, modalCloseButtonProps } from '../';
import type { ConfirmProps } from './types';

export default {
	argTypes: {},
	component: ConfirmDelete,
	title: 'Components/Confirm/ConfirmDelete',
} as Meta;

type ConfirmStory = Story<ConfirmProps>;

const buttonProps = { ...modalCloseButtonProps, buttonText: 'delete' };

const Template: ConfirmStory = (args) => <ConfirmDelete {...args} buttonProps={buttonProps} />;

export const Default: ConfirmStory = Template.bind({});
Default.args = {};
