import React, { useMemo } from 'react';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@eventespresso/i18n';

import { ADMIN_ROUTES } from '@eventespresso/constants';
import { getAdminUrl, useEventId } from '@eventespresso/edtr-services';
import { useConfig } from '@eventespresso/services';
import { RegistrationsLink, ItemCount } from '@eventespresso/components';
import { Ticket } from '@eventespresso/edtr-services';

interface Props {
	ticket: Ticket;
}

const tooltipProps = { placement: 'top' as const };

const TicketRegistrationsLink: React.FC<Props> = ({ ticket }) => {
	const { siteUrl } = useConfig();

	const adminUrl = useMemo(() => {
		return getAdminUrl({ adminSiteUrl: siteUrl.admin, page: ADMIN_ROUTES.REGISTRATIONS });
	}, [siteUrl.admin]);

	const eventId = useEventId();

	const args = useMemo(
		() => ({
			event_id: eventId,
			ticket_id: ticket.dbId,
			return: 'edit',
		}),
		[eventId, ticket.dbId]
	);
	const regListUrl = addQueryArgs(adminUrl, args);

	const countTitle = __('total registrations.');
	const tooltip = __('view ALL registrations for this ticket.');

	return (
		<ItemCount count={ticket.registrationCount} title={countTitle} emphasizeZero={false}>
			<RegistrationsLink href={regListUrl} tooltip={tooltip} tooltipProps={tooltipProps} />
		</ItemCount>
	);
};

export default TicketRegistrationsLink;
