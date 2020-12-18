import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Groups } from '@eventespresso/icons';
import { IconButton } from '../';
import type { IconButtonProps } from './types';

export default {
	argTypes: {},
	component: IconButton,
	title: 'Components/Button/IconButton',
} as Meta;

type IconButtonStory = Story<IconButtonProps>;

const Template: IconButtonStory = (args) => <IconButton {...args} icon={Groups} />;

export const Default: IconButtonStory = Template.bind({});

export const Borderless: IconButtonStory = Template.bind({});
Borderless.args = { borderless: true };
