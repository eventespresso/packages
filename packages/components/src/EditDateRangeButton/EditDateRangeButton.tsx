import React, { useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { __ } from '@eventespresso/i18n';

import { CalendarOutlined } from '@eventespresso/icons';
import { useMemoStringify } from '@eventespresso/hooks';

import { ButtonType, DateTimeRangePicker, IconButton, Popover } from '../../';
import type { DateRange } from '@eventespresso/dates';
import type { EditDateRangeButtonProps } from './types';

import './styles.scss';

export const EditDateRangeButton: React.FC<EditDateRangeButtonProps> = ({
	dateTimeFormat,
	header,
	locale,
	onEditHandler,
	startDate,
	endDate,
	tooltip,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const onChange = useCallback(
		(dates: DateRange) => {
			onEditHandler(dates);
			onClose();
		},
		[onClose, onEditHandler]
	);
	const value = useMemoStringify<DateRange>([startDate, endDate]);

	const content = (
		<DateTimeRangePicker dateFormat={dateTimeFormat} locale={locale} onChange={onChange} value={value} />
	);

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
