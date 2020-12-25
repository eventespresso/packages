import type { Story, Meta } from '@storybook/react/types-6-0';

import { Groups } from '@eventespresso/icons';
import { Link } from './';

export default {
	argTypes: {},
	component: Link,
	title: 'Components/Button/Link',
} as Meta;

type LinkStory = Story<React.ComponentProps<typeof Link>>;

const Template: LinkStory = (args) => (
	<Link {...args} href='https://eventespresso.com/'>
		Link
	</Link>
);

export const Default: LinkStory = Template.bind({});

export const WithIcon: LinkStory = Template.bind({});
WithIcon.args = { icon: <Groups /> };

export const WithTooltip: LinkStory = Template.bind({});
WithTooltip.args = { tooltip: 'tooltip text' };
