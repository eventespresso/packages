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

export const Size: LoadingNoticeStory = () => {
	const sizes = ['small', 'big'];
	const style = { border: '1px solid black', marginBottom: '1rem' };

	return (
		<div>
			{sizes.map((size) => (
				<div key={size} style={style}>
					<LoadingNotice size={size as LoadingNoticeProps['size']} />
				</div>
			))}
		</div>
	);
};
