import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Banner } from './';
import type { BannerProps } from '@eventespresso/adapters';

export default {
	argTypes: {},
	component: Banner,
	title: 'Components/Banner',
} as Meta;

type BannerStory = Story<BannerProps>;

const Template: BannerStory = (args) => <Banner {...args} description='description' title='title' variant='subtle' />;

export const Error: BannerStory = Template.bind({});
Error.args = { status: 'error' };

export const Info: BannerStory = Template.bind({});
Info.args = { status: 'info' };
