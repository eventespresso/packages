import { withKnobs, boolean } from '@storybook/addon-knobs';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from '../../';
import { ButtonProps } from './types';

export default {
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	component: Button,
	decorators: [withKnobs],
	title: 'Components/Button',
} as Meta;

type ButtonStory = Story<ButtonProps>;

const Template: ButtonStory = (args) => <Button {...args} isDisabled={boolean('Disabled', false)} />;

export const Default: ButtonStory = Template.bind({});
Default.args = {
	buttonText: 'Default',
	buttonType: 'default',
};

export const Accent: ButtonStory = Template.bind({});
Accent.args = {
	buttonText: 'Accent',
	buttonType: 'accent',
};

export const Primary: ButtonStory = Template.bind({});
Primary.args = {
	buttonText: 'Primary',
	buttonType: 'primary',
};

export const Secondary: ButtonStory = Template.bind({});
Secondary.args = {
	buttonText: 'Secondary',
	buttonType: 'secondary',
};

export const Big: ButtonStory = Template.bind({});
Big.args = {
	buttonText: 'Big',
	size: 'big',
};

export const Small: ButtonStory = Template.bind({});
Small.args = {
	buttonText: 'Small',
	size: 'small',
};
