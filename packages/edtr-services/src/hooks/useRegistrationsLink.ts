import { useMemo } from 'react';
import { addQueryArgs } from '@wordpress/url';

import { ADMIN_ROUTES } from '@eventespresso/constants';
import { useConfig } from '@eventespresso/services';

import { getAdminUrl } from '../utils';
import { useEventId } from '../apollo/queries';

export type RegistrationsLinkArgs = {
	datetime_id?: number;
	ticket_id?: number;
};

export const useRegistrationsLink = ({ datetime_id, ticket_id }: RegistrationsLinkArgs): string => {
	const { siteUrl } = useConfig();
	const eventId = useEventId();

	return useMemo(() => {
		const adminUrl = getAdminUrl({
			adminSiteUrl: siteUrl.admin,
			page: ADMIN_ROUTES.REGISTRATIONS,
		});
		return addQueryArgs(adminUrl, {
			event_id: eventId,
			datetime_id,
			ticket_id,
			return: 'edit',
		});
	}, [datetime_id, eventId, siteUrl.admin, ticket_id]);
};
