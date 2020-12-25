import type { Story, Meta } from '@storybook/react/types-6-0';

import { Heading } from '../';
import type { HeadingProps } from './types';

export default {
	argTypes: {},
	component: Heading,
	title: 'Components/Heading',
} as Meta;

type HeadingStory = Story<HeadingProps>;

const Template: HeadingStory = (args) => <Heading {...args}>I am a Heading</Heading>;

export const Default: HeadingStory = Template.bind({});
Default.args = {};

export const AsH2: HeadingStory = Template.bind({});
AsH2.args = { as: 'h2' };

export const AsH3: HeadingStory = Template.bind({});
AsH3.args = { as: 'h3' };
