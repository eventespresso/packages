import { useCallback, useMemo } from 'react';

import { SimpleTicketCard } from '@eventespresso/ee-components';
import { SimpleEntityRendererProps } from '@eventespresso/ui-components';
import { LOCALIZED_DATE_AND_TIME_SHORT_FORMAT } from '@eventespresso/constants';
import { useTimeZoneTime, useCurrentUserCan } from '@eventespresso/services';
import { DefaultTicket } from './data';

const TicketCard: React.FC<SimpleEntityRendererProps<DefaultTicket>> = ({ entity: ticket, onEdit, onDelete }) => {
	const { formatForSite } = useTimeZoneTime();
	const currentUserCan = useCurrentUserCan();

	const renderStartDate = useCallback(
		({ startDate }) => {
			return formatForSite(startDate, LOCALIZED_DATE_AND_TIME_SHORT_FORMAT);
		},
		[formatForSite]
	);

	const renderEndDate = useCallback(
		({ endDate }) => {
			return formatForSite(endDate, LOCALIZED_DATE_AND_TIME_SHORT_FORMAT);
		},
		[formatForSite]
	);

	const showAfterDetails = Boolean(ticket.startDate && ticket.endDate);

	const deleteButtonProps = useMemo(() => {
		return { isDisabled: !currentUserCan('delete', 'default_ticket', ticket) };
	}, [currentUserCan, ticket]);

	const editButtonProps = useMemo(() => {
		return { isDisabled: !currentUserCan('edit', 'default_ticket', ticket) };
	}, [currentUserCan, ticket]);

	return (
		<SimpleTicketCard
			deleteButtonProps={deleteButtonProps}
			editButtonProps={editButtonProps}
			entity={ticket as any}
			onDelete={onDelete}
			onEdit={onEdit}
			renderEndDate={renderEndDate}
			renderStartDate={renderStartDate}
			showAfterDetails={showAfterDetails}
		/>
	);
};

export default TicketCard;
