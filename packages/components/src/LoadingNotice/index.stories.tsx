import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { LoadingNotice, LoadingNoticeProps } from './';

export default {
	argTypes: {},
	component: LoadingNotice,
	title: 'Components/LoadingNotice',
} as Meta;

type LoadingNoticeStory = Story<LoadingNoticeProps>;

export const Basic: LoadingNoticeStory = () => <LoadingNotice />;

export const Size: LoadingNoticeStory = () => (
	<div>
		{['small', 'big'].map((size) => (
			// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
			<div key={size} style={{ border: '1px solid black', marginBottom: '1rem' }}>
				<LoadingNotice size={size as LoadingNoticeProps['size']} />
			</div>
		))}
	</div>
);
