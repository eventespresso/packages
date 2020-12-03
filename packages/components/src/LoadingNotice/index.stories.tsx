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

const sizes = ['small', 'big'];
const style = { border: '1px solid black', marginBottom: '1rem' };

export const Size: LoadingNoticeStory = () => {
	return (
		<div>
			{sizes.map((size) => (
				<div key={size}>
					<div style={style}>
						<LoadingNotice size={size as LoadingNoticeProps['size']} />
					</div>
				</div>
			))}
		</div>
	);
};
