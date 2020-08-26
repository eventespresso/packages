import React from 'react';

import { ADMIN_ROUTES } from '@eventespresso/constants';
import { getAdminUrl } from '@eventespresso/edtr-services';
import { Link } from '@eventespresso/components';
import { useConfig } from '@eventespresso/services';

const DefaultPricesLink: React.FC = ({ children }) => {
	const {
		siteUrl: { admin },
	} = useConfig();
	const href = getAdminUrl({ adminSiteUrl: admin, page: ADMIN_ROUTES.PRICES });

	return <Link href={href}>{children}</Link>;
};

export default DefaultPricesLink;
