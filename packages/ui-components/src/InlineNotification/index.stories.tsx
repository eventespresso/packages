import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs, text } from '@storybook/addon-knobs';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { ErrorMessage, InfoMessage, InlineNotification, SuccessMessage, WarningMessage } from './';
import type { InlineMessageProps } from './types';

export default {
	argTypes: {},
	component: InlineNotification,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: MINIMAL_VIEWPORTS,
			defaultViewport: 'mobile',
		},
	},
	title: 'Components/InlineNotification',
} as Meta;

type InlineNotificationStory = Story<InlineMessageProps>;

const message = text('Message', 'long long long long long long long long long long long message');

export const Error: InlineNotificationStory = () => <ErrorMessage message={message} />;

export const Info: InlineNotificationStory = () => <InfoMessage message={message} />;

export const Default: InlineNotificationStory = () => <InlineNotification message={message} />;

export const Success: InlineNotificationStory = () => <SuccessMessage message={message} />;

export const Warning: InlineNotificationStory = () => <WarningMessage message={message} />;
