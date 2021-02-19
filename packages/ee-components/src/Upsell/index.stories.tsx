import type { Story, Meta } from '@storybook/react/types-6-0';

import { DataProvider } from '@eventespresso/data';
import { ConfigProvider } from '@eventespresso/services';

import { Upsell } from './Upsell';
import type { UpsellProps } from './types';

export default {
	argTypes: {},
	component: Upsell,
	title: 'Components/Upsell',
} as Meta;

type UpsellStory = Story<UpsellProps>;

const Template: UpsellStory = (args) => (
	<DataProvider>
		<ConfigProvider>
			<Upsell
				{...args}
				mainTitle='Get more features with Everything subscription'
				subtitle='Upgrade to Everything Support License'
			/>
		</ConfigProvider>
	</DataProvider>
);

export const WithBaseTemplate: UpsellStory = Template.bind({});
