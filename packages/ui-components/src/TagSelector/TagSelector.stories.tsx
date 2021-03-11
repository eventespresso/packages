import type { Story, Meta } from '@storybook/react/types-6-0';

import { TagSelector, TagSelectorProps } from './TagSelector';

export default {
	argTypes: {},
	component: TagSelector,
	title: 'Components/TagSelector',
} as Meta;

type TagSelectorStory = Story<TagSelectorProps>;

const items = [
	'Americium',
	'Berkelium',
	'Bohrium',
	'Californium',
	'Copernicium',
	'Curium',
	'Darmstadtium',
	'Dubnium',
	'Einsteinium',
	'Fermium',
	'Flerovium',
	'Hassium',
	'Lawrencium',
	'Livermorium',
	'Meitnerium',
	'Mendelevium',
	'Moscovium',
	'Neptunium',
	'Nihonium',
	'Nobelium',
	'Oganesson',
	'Plutonium',
	'Roentgenium',
	'Rutherfordium',
	'Seaborgium',
	'Tennessine',
];

const Template: TagSelectorStory = (args) => <TagSelector {...args} items={items} />;

export const Default: TagSelectorStory = Template.bind({});
