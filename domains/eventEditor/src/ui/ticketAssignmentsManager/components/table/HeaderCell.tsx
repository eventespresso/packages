import React from 'react';
import { parseISO } from 'date-fns';
import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';

import { getTicketBackgroundColorClassName } from '@eventespresso/helpers';
import type { RenderCellProps } from '../../types';
import { useMoneyDisplay, useTimeZoneTime } from '@eventespresso/services';

const HeaderCell: React.FC<RenderCellProps> = ({ ticket }) => {
	const bgClassName = getTicketBackgroundColorClassName(ticket);
	const { currency } = useMoneyDisplay();
	const { formatForSite: format } = useTimeZoneTime();
	const startDate = ticket.startDate && format(parseISO(ticket.startDate), 'MMM dd yyyy');
	const startDateClassName = classNames(bgClassName, 'header-cell-content__after');

	return (
		<div className='header-cell-content__wrapper'>
			<div className='header-cell-content'>
				<div className='ee-focus-priority-8 header-cell-content__id'>{`${__('ID')}: ${ticket.dbId}`}</div>
				<div className='ee-focus-priority-5 header-cell-content__name'>{ticket.name}</div>
				<div className='ee-focus-priority-8 header-cell-content__price'>{`${currency.sign} ${
					ticket.price || 0
				}`}</div>
			</div>
			<div className={startDateClassName}>{startDate}</div>
		</div>
	);
};

export default React.memo(HeaderCell);
