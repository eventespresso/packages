import { format, isSameDay, isSameMonth, isSameYear } from 'date-fns';

import type { RangeFormat, RangeFormatProps } from '../types';

export const rangeFormat = ({
	formatTokens: {
		ampm = 'aaaa',
		day = 'd',
		daySeparator = '-',
		hour = 'h',
		min = 'mm',
		month = 'LLLL',
		monthSeparator = '-',
		timeSeparator = '-',
		year = 'yyyy',
		yearSeparator = '-',
	},
	range,
	showTime,
}: RangeFormatProps): RangeFormat => {
	const [start, end] = range;

	let formattedYear: string;
	let formattedMonth: string;
	let formattedDay: string;

	const timeFormatter = `${hour}:${min} ${ampm}`;
	const formattedTime = !showTime
		? ''
		: ` ${format(start, timeFormatter)} ${timeSeparator} ${format(end, timeFormatter)}`;

	if (isSameYear(start, end)) {
		formattedYear = format(start, year);
	} else {
		return `${format(start, month)} ${format(start, day)} ${format(start, year)} ${yearSeparator} ${format(
			end,
			month
		)} ${format(end, day)} ${format(end, year)}${formattedTime}`;
	}

	if (isSameMonth(start, end)) {
		formattedMonth = format(start, month);
	} else {
		return `${format(start, month)} ${format(start, day)} ${monthSeparator} ${format(end, month)} ${format(
			end,
			day
		)} ${formattedYear}${formattedTime}`;
	}

	if (isSameDay(start, end)) {
		formattedDay = format(start, day);
	} else {
		formattedDay = format(start, day) + daySeparator + format(end, day);
	}

	return `${formattedMonth} ${formattedDay} ${formattedYear}${formattedTime}`;
};
