import React, { useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/core';
import { __ } from '@eventespresso/i18n';
import { parseISO } from 'date-fns';

import { ButtonType, DateTimeRangePicker, IconButton, Popover } from '../../';
import { CalendarOutlined } from '@eventespresso/icons';
import { useConfig, useTimeZoneTime } from '@eventespresso/services';
import { useMemoStringify } from '@eventespresso/hooks';

import type { DateRange } from '@eventespresso/dates';
import type { EditDateButtonProps } from './types';

import './styles.scss';

export const EditDateRangeButton: React.FC<EditDateButtonProps> = ({
	header,
	onEditHandler,
	startDate,
	endDate,
	tooltip,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		dateTimeFormats: { dateTimeFormat },
		locale: { user },
	} = useConfig();
	const { utcToSiteTime } = useTimeZoneTime();

	const onChange = useCallback(
		(dates: DateRange) => {
			onEditHandler(dates);
			onClose();
		},
		[onClose, onEditHandler]
	);
	const value = useMemoStringify<DateRange>([utcToSiteTime(parseISO(startDate)), utcToSiteTime(parseISO(endDate))]);

	const content = <DateTimeRangePicker dateFormat={dateTimeFormat} locale={user} onChange={onChange} value={value} />;

	const headerText = header ? header : __('Edit Start and End Dates and Times');

	return (
		<Popover
			className='ee-edit-calendar-date-range'
			closeOnBlur={false}
			content={content}
			header={<strong>{headerText}</strong>}
			isOpen={isOpen}
			onClose={onClose}
			trigger={
				<IconButton
					aria-label={headerText}
					borderless
					buttonType={ButtonType.MINIMAL}
					className={'ee-edit-calendar-date-range-btn'}
					color={'white'}
					icon={CalendarOutlined}
					onClick={onOpen}
					size='small'
					tooltip={tooltip}
					transparentBg
				/>
			}
		/>
	);
};
