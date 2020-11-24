import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Divider } from './';
import type { DividerProps } from '@eventespresso/adapters';

export default {
	component: Divider,
	title: 'Components/Divider',
} as Meta;

type DividerStory = Story<DividerProps>;

export const Basic: DividerStory = () => <Divider />;

export const Vertical: DividerStory = () => <Divider orientation='vertical' />;

export const Horizontal: DividerStory = () => <Divider orientation='horizontal' />;

export const DashedVariant: DividerStory = () => <Divider orientation='horizontal' type='dashed' />;
