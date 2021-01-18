import { format, isSameDay, isSameMonth, isSameYear } from 'date-fns';
import { useMemo } from 'react';

import type { RangeFormatProps, RangeFormatTokens } from '../../types';

import './styles.scss';

const DEFAULT_FORMAT_TOKENS: RangeFormatTokens = {
	ampm: 'aaaa',
	day: 'd',
	daySeparator: '-',
	hour: 'h',
	min: 'mm',
	month: 'LLLL',
	monthSeparator: '-',
	timeSeparator: '-',
	year: 'yyyy',
	yearSeparator: '-',
};

export const RangeFormat: React.FC<RangeFormatProps> = ({
	endDate,
	formatTokens,
	showTime,
	startDate,
}: RangeFormatProps) => {
	const { ampm, day, daySeparator, hour, min, month, monthSeparator, timeSeparator, year, yearSeparator } = useMemo(
		() => ({
			...DEFAULT_FORMAT_TOKENS,
			...formatTokens,
		}),
		[formatTokens]
	);

	const start = new Date(startDate);
	const end = new Date(endDate);

	const className = 'ee-range-format';

	let formattedYear: string;
	let formattedMonth: string;
	let formattedDay: string;

	const timeFormatter = `${hour}:${min} ${ampm}`;
	const formattedTime = !showTime ? (
		''
	) : (
		<div className={className}>
			<span>{format(start, timeFormatter)}</span>
			<span>{timeSeparator}</span>
			<span>{format(end, timeFormatter)}</span>
		</div>
	);

	if (isSameYear(start, end)) {
		formattedYear = format(start, year);
	} else {
		return (
			<div className={className}>
				<span>{format(start, month)}</span>
				<span>{format(start, day)}</span>
				<span>{format(start, year)}</span>
				<span>{yearSeparator}</span>
				<span>{format(end, month)}</span>
				<span>{format(end, day)}</span>
				<span>{format(end, year)}</span>
				<span>{formattedTime}</span>
			</div>
		);
	}

	if (isSameMonth(start, end)) {
		formattedMonth = format(start, month);
	} else {
		return (
			<div className={className}>
				<span>{format(start, month)}</span>
				<span>{format(start, day)}</span>
				<span>{monthSeparator}</span>
				<span>{format(end, month)}</span>
				<span>{format(end, day)}</span>
				<span>{formattedYear}</span>
				{formattedTime}
			</div>
		);
	}

	if (isSameDay(start, end)) {
		formattedDay = format(start, day);
	} else {
		formattedDay = format(start, day) + daySeparator + format(end, day);
	}

	return (
		<div className={className}>
			<span>{formattedMonth}</span>
			<span>{formattedDay}</span>
			<span>{formattedYear}</span>
			{formattedTime}
		</div>
	);
};
