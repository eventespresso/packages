import React from 'react';
import { parseISO } from 'date-fns';
import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';

import { CurrencyDisplay } from '@eventespresso/components';
import { getTicketBackgroundColorClassName } from '@eventespresso/helpers';
import { useTimeZoneTime } from '@eventespresso/services';
import type { RenderCellProps } from '../../types';

const HeaderCell: React.FC<RenderCellProps> = ({ ticket }) => {
	const bgClassName = getTicketBackgroundColorClassName(ticket);
	const { formatForSite: format } = useTimeZoneTime();
	const startDate = ticket.startDate && format(parseISO(ticket.startDate), 'MMM dd yyyy');
	const startDateClassName = classNames(bgClassName, 'header-cell-content__after');

	return (
		<div className='header-cell-content__wrapper'>
			<div className='header-cell-content'>
				<div className='ee-focus-priority-6 header-cell-content__id'>{`${__('ID')}: ${ticket.dbId}`}</div>
				<div className='ee-focus-priority-5 header-cell-content__name'>{ticket.name}</div>
				<div className='ee-focus-priority-7 header-cell-content__price'>
					<CurrencyDisplay value={ticket.price || 0} />
				</div>
			</div>
			<div className={startDateClassName}>{startDate}</div>
		</div>
	);
};

export default React.memo(HeaderCell);
