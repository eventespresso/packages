import React, { useMemo } from 'react';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@eventespresso/i18n';

import { ADMIN_ROUTES } from '@eventespresso/constants';
import type { Datetime } from '@eventespresso/edtr-services';
import { getAdminUrl } from '@eventespresso/edtr-services';
import { RegistrationsLink } from '@eventespresso/components';
import { useConfig } from '@eventespresso/services';
import { useEventId } from '@eventespresso/edtr-services';

interface Props {
	datetime: Datetime;
}

const tooltipProps = { placement: 'top' as const };

const DateRegistrationsLink: React.FC<Props> = ({ datetime }) => {
	const { siteUrl } = useConfig();

	const eventId = useEventId();

	const regListUrl = useMemo(() => {
		const adminUrl = getAdminUrl({
			adminSiteUrl: siteUrl.admin,
			page: ADMIN_ROUTES.REGISTRATIONS,
		});
		return addQueryArgs(adminUrl, {
			event_id: eventId,
			datetime_id: datetime.dbId,
			return: 'edit',
		});
	}, [datetime.dbId, eventId, siteUrl.admin]);

	const tooltip = __('view ALL registrations for this date.');

	return <RegistrationsLink href={regListUrl} tooltip={tooltip} tooltipProps={tooltipProps} />;
};

export default DateRegistrationsLink;
