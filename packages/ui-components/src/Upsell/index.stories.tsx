import type { Story, Meta } from '@storybook/react/types-6-0';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import { DataProvider } from '@eventespresso/data';
// import { ConfigProvider } from '@eventespresso/services';
// import { noop } from '@eventespresso/utils';

import { Upsell } from '../Upsell';
import { AttendantList, BarCodeScanner, Budgeting, OnlineRegistration, Payment, Tickets } from '@eventespresso/icons';
import type { UpsellProps } from './types';

export default {
	argTypes: {},
	component: Upsell,
	decorators: [withKnobs],
	title: 'Components/Upsell',
} as Meta;

type UpsellStory = Story<UpsellProps>;

const Template: UpsellStory = ({
	altCTAText = 'Learn more',
	image = 'https://eventespresso.com/wp-content/uploads/2016/10/ee4-attendee-mover-380x250.jpg',
	mainText = "The value the plugin and the add-ons we ended up using has provided is much, much higher than the cost, and the support I've received is first rate. I can't recommend Event Espresso highly enough.' -Adam Tervort",
	subTitle = 'Upgrade to Everything Support License',
	...args
}) => (
	<DataProvider>
		<Upsell
			{...args}
			altCTAText={altCTAText}
			cTA='Upgrade today'
			image={image}
			imagePosition={select('imagePosition', ['bottom', 'top', 'left', 'right'], 'right')}
			isDismissable={boolean('isDismissable', false)}
			mainText={mainText}
			mainTitle={args.mainTitle || 'Get more features with Everything subscription'}
			orientation={select('orientation', ['horizontal', 'vertical'], 'horizontal')}
			subTitle={subTitle}
			withBorder={boolean('withBorder', false)}
		/>
	</DataProvider>
);

export const WithBaseTemplate: UpsellStory = Template.bind({});
WithBaseTemplate.args = { templateId: 'base' };

export const WithCompactTemplate: UpsellStory = Template.bind({});
WithCompactTemplate.args = {
	altCTAText: null,
	image: null,
	templateId: 'compact',
	orientation: 'horizontal',
	mainTitle: 'One row title for non-intrusive ads',
	mainText: null,
	subTitle: null,
};

export const WithBg: UpsellStory = Template.bind({});
WithBg.args = {
	bgColor: 'green',
	icon: <AttendantList />,
	mainText: 'Sign up today',
	mainTitle: 'Get your event attendance tracking to the next level',
	templateId: 'with-bg-image',
};

export const WithOptions: UpsellStory = Template.bind({});
WithOptions.args = {
	bgColor: 'blue',
	icon: <OnlineRegistration />,
	mainText: 'Sign up today',
	mainTitle: 'Ease your registration process with Event Espresso',
	options: [
		{ icon: <Payment />, text: 'Online payments' },
		{ icon: <Tickets />, text: 'Digital tickets' },
		{ icon: <BarCodeScanner />, text: 'Bar code scanner' },
		{ icon: <Budgeting />, text: 'Paperless budgeting' },
	],
	orientation: 'vertical',
	templateId: 'with-options',
};
