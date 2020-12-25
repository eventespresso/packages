import React from 'react';
import { __ } from '@eventespresso/i18n';

import { RegistrationsLink, ItemCount } from '@eventespresso/ui-components';
import type { Ticket } from '@eventespresso/edtr-services';
import { useRegistrationsLink } from '@eventespresso/edtr-services';

interface Props {
	ticket: Ticket;
}

const tooltipProps = { placement: 'top' as const };

const TicketRegistrationsLink: React.FC<Props> = ({ ticket }) => {
	const regListUrl = useRegistrationsLink({ ticket_id: ticket.dbId });

	const countTitle = __('total registrations.');
	const tooltip = __('view ALL registrations for this ticket.');

	return (
		<ItemCount count={ticket.registrationCount} emphasizeZero={false} title={countTitle}>
			<RegistrationsLink href={regListUrl} tooltip={tooltip} tooltipProps={tooltipProps} />
		</ItemCount>
	);
};

export default TicketRegistrationsLink;
