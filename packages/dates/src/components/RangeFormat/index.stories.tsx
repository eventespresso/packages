import type { Story, Meta } from '@storybook/react/types-6-0';

import { RangeFormat } from './';

import type { RangeFormatProps } from '../../types';

export default {
	component: RangeFormat,
	title: 'Components/RangeFormat',
} as Meta;

const formatTokens = { month: 'LLL' };

type RangeFormatStory = Story<RangeFormatProps>;

export const Default: RangeFormatStory = () => (
	<RangeFormat
		endDate='Mon Feb 15 2022 19:00:00 GMT+0200 (Eastern European Standard Time)'
		formatTokens={formatTokens}
		startDate='Mon Feb 15 2021 19:00:00 GMT+0200 (Eastern European Standard Time)'
	/>
);

export const DefaultRTL: RangeFormatStory = () => (
	<div dir='rtl'>
		<RangeFormat
			endDate='Mon Feb 15 2022 19:00:00 GMT+0200 (Eastern European Standard Time)'
			formatTokens={formatTokens}
			startDate='Mon Feb 15 2021 19:00:00 GMT+0200 (Eastern European Standard Time)'
		/>
	</div>
);
