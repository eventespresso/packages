import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Ticket } from '@eventespresso/icons';
import { IconButton, ItemCount } from '../';
import type { ItemCountProps } from './types';

export default {
	argTypes: {},
	component: ItemCount,
	title: 'Components/ItemCount',
} as Meta;

type BannerStory = Story<ItemCountProps>;

const Template: BannerStory = (args) => {
	console.log({ args });

	return (
		<ItemCount {...args} title='title' zeroCountChar='!'>
			<IconButton borderless icon={Ticket} onClick={null} tooltip={'assign tickets'} />
		</ItemCount>
	);
};

export const Default: BannerStory = Template.bind({});

export const WithNoItems: BannerStory = Template.bind({
	count: 0,
});

export const WithItems: BannerStory = Template.bind({
	count: 10,
});
