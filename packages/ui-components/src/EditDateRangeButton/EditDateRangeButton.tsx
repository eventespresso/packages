import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { CalendarOutlined } from '@eventespresso/icons';
import { useDisclosure, useMemoStringify, useViewportWidthGreaterThan } from '@eventespresso/hooks';

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
	popoverPlacement,
	TimezoneTimeInfo,
	tooltip,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const isMobile = !useViewportWidthGreaterThan(505);

	const onChange = useCallback(
		(dates: DateRange) => {
			onEditHandler(dates);
			onClose();
		},
		[onClose, onEditHandler]
	);
	const value = useMemoStringify<DateRange>([startDate, endDate]);

	const content = (
		<DateTimeRangePicker
			dateFormat={dateTimeFormat}
			locale={locale}
			onChange={onChange}
			TimezoneTimeInfo={TimezoneTimeInfo}
			value={value}
		/>
	);

	const headerText = header ? header : __('Edit Start and End Dates and Times');

	const placement = isMobile ? 'auto' : popoverPlacement;

	return (
		<Popover
			isLazy
			className='ee-edit-calendar-date-range'
			closeOnBlur={false}
			content={content}
			header={<strong>{headerText}</strong>}
			isOpen={isOpen}
			onClose={onClose}
			placement={placement}
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
