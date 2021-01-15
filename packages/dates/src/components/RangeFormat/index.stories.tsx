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
		endDate='Mon Feb 15 2021 21:00:00 GMT+0200 (Eastern European Standard Time)'
		formatTokens={formatTokens}
		startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
	/>
);

export const DefaultRTL: RangeFormatStory = () => (
	<div dir='rtl'>
		<RangeFormat
			endDate='Mon Feb 15 2021 21:00:00 GMT+0200 (Eastern European Standard Time)'
			formatTokens={formatTokens}
			startDate='Mon Feb 15 2021 19:00:00 GMT+0200 (Eastern European Standard Time)'
		/>
	</div>
);

export const SameDayWithTime: RangeFormatStory = () => (
	<RangeFormat
		endDate='Mon Feb 15 2021 22:00:00 GMT+0200 (Eastern European Standard Time)'
		formatTokens={formatTokens}
		showTime
		startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
	/>
);

export const SameDayWithTimeRTL: RangeFormatStory = () => (
	<div dir='rtl'>
		<RangeFormat
			endDate='Mon Feb 15 2021 22:00:00 GMT+0200 (Eastern European Standard Time)'
			formatTokens={formatTokens}
			showTime
			startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
		/>
	</div>
);

export const DifferentDays: RangeFormatStory = () => (
	<RangeFormat
		endDate='Mon Feb 16 2021 22:00:00 GMT+0200 (Eastern European Standard Time)'
		formatTokens={formatTokens}
		startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
	/>
);

export const DifferentDaysRTL: RangeFormatStory = () => (
	<div dir='rtl'>
		<RangeFormat
			endDate='Mon Feb 16 2021 22:00:00 GMT+0200 (Eastern European Standard Time)'
			formatTokens={formatTokens}
			startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
		/>
	</div>
);

export const DifferentDaysWithTime: RangeFormatStory = () => (
	<RangeFormat
		endDate='Mon Feb 16 2021 22:00:00 GMT+0200 (Eastern European Standard Time)'
		formatTokens={formatTokens}
		showTime
		startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
	/>
);

export const DifferentDaysWithTimeRTL: RangeFormatStory = () => (
	<div dir='rtl'>
		<RangeFormat
			endDate='Mon Feb 16 2021 22:00:00 GMT+0200 (Eastern European Standard Time)'
			formatTokens={formatTokens}
			showTime
			startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
		/>
	</div>
);

export const DifferentMonths: RangeFormatStory = () => (
	<RangeFormat
		endDate='Mon Mar 16 2021 22:00:00 GMT+0200 (Eastern European Standard Time)'
		formatTokens={formatTokens}
		startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
	/>
);

export const DifferentMonthsRTL: RangeFormatStory = () => (
	<div dir='rtl'>
		<RangeFormat
			endDate='Mon Mar 16 2021 22:00:00 GMT+0200 (Eastern European Standard Time)'
			formatTokens={formatTokens}
			startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
		/>
	</div>
);

export const DifferentMonthsWithTime: RangeFormatStory = () => (
	<RangeFormat
		endDate='Mon Mar 16 2021 22:00:00 GMT+0200 (Eastern European Standard Time)'
		formatTokens={formatTokens}
		showTime
		startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
	/>
);

export const DifferentMonthsWithTimeRTL: RangeFormatStory = () => (
	<div dir='rtl'>
		<RangeFormat
			endDate='Mon Mar 16 2021 22:00:00 GMT+0200 (Eastern European Standard Time)'
			formatTokens={formatTokens}
			showTime
			startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
		/>
	</div>
);

export const DifferentYears: RangeFormatStory = () => (
	<RangeFormat
		endDate='Mon Mar 16 2022 22:00:00 GMT+0200 (Eastern European Standard Time)'
		formatTokens={formatTokens}
		startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
	/>
);

export const DifferentYearsRTL: RangeFormatStory = () => (
	<div dir='rtl'>
		<RangeFormat
			endDate='Mon Mar 16 2022 22:00:00 GMT+0200 (Eastern European Standard Time)'
			formatTokens={formatTokens}
			startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
		/>
	</div>
);

export const DifferentYearsWithTime: RangeFormatStory = () => (
	<RangeFormat
		endDate='Mon Mar 16 2022 22:00:00 GMT+0200 (Eastern European Standard Time)'
		formatTokens={formatTokens}
		showTime
		startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
	/>
);

export const DifferentYearsWithTimeRTL: RangeFormatStory = () => (
	<div dir='rtl'>
		<RangeFormat
			endDate='Mon Mar 16 2022 22:00:00 GMT+0200 (Eastern European Standard Time)'
			formatTokens={formatTokens}
			showTime
			startDate='Mon Feb 15 2021 20:00:00 GMT+0200 (Eastern European Standard Time)'
		/>
	</div>
);
