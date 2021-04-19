import type { Meta } from '@storybook/react/types-6-0';

import { EventRegistrationOptions } from './index';

export default {
	component: EventRegistrationOptions,
	title: 'Components/Event Editor/EventRegistrationOptions',
} as Meta;

export const Default = () => <EventRegistrationOptions />;
