import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { CalendarDateSwitcher, EditDateRangeButton } from '@eventespresso/components';
import { getTicketStatusTextLabel } from '@eventespresso/helpers';
import { useTicketsListFilterState } from '@edtrServices/filterState';
import { getPropsAreEqual } from '@eventespresso/services';
import { useTicketMutator } from '@eventespresso/edtr-services';
import { useTimeZoneTime } from '@eventespresso/services';
import type { DateRange } from '@eventespresso/adapters';
import type { TicketItemProps } from '../types';

const TicketCardSidebar: React.FC<TicketItemProps> = ({ entity: ticket }) => {
	const { displayStartOrEndDate } = useTicketsListFilterState();
	const { updateEntity } = useTicketMutator(ticket.id);
	const { siteTimeToUtc } = useTimeZoneTime();

	const onEditHandler = useCallback(
		([start, end]: DateRange): void => {
			// convert start & end dates to proper UTC "startDate" and "endDate"
			const startDate = siteTimeToUtc(start).toISOString();
			const endDate = siteTimeToUtc(end).toISOString();
			updateEntity({ startDate, endDate });
		},
		[siteTimeToUtc, updateEntity]
	);
	const statusText = getTicketStatusTextLabel(ticket);

	return ticket ? (
		<>
			<CalendarDateSwitcher
				displayBoth={displayStartOrEndDate === 'both'}
				displayEnd={displayStartOrEndDate === 'end'}
				displayStart={displayStartOrEndDate === 'start'}
				endDate={ticket.endDate}
				startDate={ticket.startDate}
			/>
			<EditDateRangeButton
				endDate={ticket.endDate}
				header={__('Edit Ticket Sales Start and End Dates')}
				onEditHandler={onEditHandler}
				tooltip={__('edit ticket sales start and end dates')}
				startDate={ticket.startDate}
			/>
			<div className={'ee-ticket-status-label'}>{statusText}</div>
		</>
	) : null;
};

export default React.memo(TicketCardSidebar, getPropsAreEqual(['entity', 'cacheId']));
