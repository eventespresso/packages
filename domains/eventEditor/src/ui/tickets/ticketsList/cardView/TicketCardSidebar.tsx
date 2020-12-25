import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { CalendarDateSwitcher, EditDateRangeButton } from '@eventespresso/ee-components';
import { getTicketStatusTextLabel } from '@eventespresso/helpers';
import { useTicketMutator, useTicketsListFilterState } from '@eventespresso/edtr-services';
import { useTimeZoneTime } from '@eventespresso/services';
import type { DateRange } from '@eventespresso/dates';
import type { TicketItemProps } from '../types';

const TicketCardSidebar: React.FC<Partial<TicketItemProps>> = ({ entity: ticket }) => {
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
				displayDate={displayStartOrEndDate}
				endDate={ticket.endDate}
				startDate={ticket.startDate}
			/>
			<EditDateRangeButton
				endDate={ticket.endDate}
				header={__('Edit Ticket Sale Dates')}
				onEditHandler={onEditHandler}
				tooltip={__('edit ticket sales start and end dates')}
				startDate={ticket.startDate}
			/>
			<div className={'ee-ticket-status-label'}>{statusText}</div>
		</>
	) : null;
};

export default TicketCardSidebar;
