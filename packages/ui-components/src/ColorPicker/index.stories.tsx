import type { Story, Meta } from '@storybook/react/types-6-0';

import { ColorPicker } from './ColorPicker';
import type { ColorPickerProps } from '@eventespresso/adapters';

export default {
	argTypes: {},
	component: ColorPicker,
	title: 'Components/ColorPicker',
} as Meta;

type ColorPickerStory = Story<ColorPickerProps>;

const Template: ColorPickerStory = (args) => <ColorPicker {...args} />;

export const Basic: ColorPickerStory = Template.bind({});
