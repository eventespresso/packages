import { always } from 'ramda';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { DateRangePicker, DateTimePicker } from './';

import type { DateRangePickerProps } from './types';

export default {
	component: DateRangePicker,
	title: 'Components/DateRangePicker',
} as Meta;

type DateTimeRangePickerStory = Story<DateRangePickerProps>;

export const DatePickerWithTime: DateTimeRangePickerStory = () => (
	<DateTimePicker
		dateFormat='MMMM d, yyyy h:mm a'
		inline
		locale='en-US'
		onChange={always(null)}
		value={new Date('Tue Jan 05 2021 20:42:00 GMT+0200 (Eastern European Standard Time)')}
	/>
);
