import React from 'react';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';

import { ADMIN_ROUTES } from '@eventespresso/constants';
import type { Datetime } from '@eventespresso/edtr-services';
import { getAdminUrl } from '@eventespresso/edtr-services';
import { getPropsAreEqual, useMemoStringify } from '@eventespresso/services';
import { RegistrationsLink } from '@eventespresso/components';
import { useConfig } from '@eventespresso/services';
import { useEventId } from '@eventespresso/edtr-services';
import type { TooltipProps } from '@eventespresso/adapters';

interface Props {
	datetime: Datetime;
}

const DateRegistrationsLink: React.FC<Props> = ({ datetime }) => {
	const {
		siteUrl: { admin },
	} = useConfig();
	const adminUrl = getAdminUrl({ adminSiteUrl: admin, page: ADMIN_ROUTES.REGISTRATIONS });
	const eventId = useEventId();
	const regListUrl = addQueryArgs(adminUrl, {
		event_id: eventId,
		datetime_id: datetime.dbId,
		return: 'edit',
	});
	const tooltip = __('view registrations for this date.');
	const tooltipProps = useMemoStringify<TooltipProps>({ placement: 'top' });

	return <RegistrationsLink href={regListUrl} tooltip={tooltip} tooltipProps={tooltipProps} />;
};

export default React.memo(DateRegistrationsLink, getPropsAreEqual(['datetime', 'cacheId']));
