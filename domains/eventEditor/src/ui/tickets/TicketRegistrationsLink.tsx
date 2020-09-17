import React from 'react';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@eventespresso/i18n';

import { ADMIN_ROUTES } from '@eventespresso/constants';
import { getAdminUrl, useEventId } from '@eventespresso/edtr-services';
import { getPropsAreEqual } from '@eventespresso/utils';
import { useConfig } from '@eventespresso/services';
import { useMemoStringify } from '@eventespresso/hooks';
import { RegistrationsLink, ItemCount } from '@eventespresso/components';
import { Ticket } from '@eventespresso/edtr-services';
import type { TooltipProps } from '@eventespresso/adapters';

interface Props {
	ticket: Ticket;
}

const TicketRegistrationsLink: React.FC<Props> = ({ ticket }) => {
	const {
		siteUrl: { admin },
	} = useConfig();
	const adminUrl = getAdminUrl({ adminSiteUrl: admin, page: ADMIN_ROUTES.REGISTRATIONS });
	const eventId = useEventId();
	const regListUrl = addQueryArgs(adminUrl, {
		event_id: eventId,
		ticket_id: ticket.dbId,
		return: 'edit',
	});
	const countTitle = __('total registrations.');
	const tooltip = __('view ALL registrations for this ticket.');
	const tooltipProps = useMemoStringify<TooltipProps>({ placement: 'top' });

	return (
		<ItemCount count={ticket.registrationCount} title={countTitle} emphasizeZero={false}>
			<RegistrationsLink href={regListUrl} tooltip={tooltip} tooltipProps={tooltipProps} />
		</ItemCount>
	);
};

export default React.memo(TicketRegistrationsLink, getPropsAreEqual(['ticket', 'cacheId']));
