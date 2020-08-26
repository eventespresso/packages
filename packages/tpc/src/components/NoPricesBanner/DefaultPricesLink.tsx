import React from 'react';

import { ADMIN_ROUTES } from '@eventespresso/constants';
import { getAdminUrl } from '@eventespresso/edtr-services';
import { Link } from '@eventespresso/components';
import { useConfig } from '@eventespresso/services';

const DefaultPricesLink: React.FC = ({ children }) => {
	const {
		siteUrl: { admin },
	} = useConfig();
	const adminUrl = getAdminUrl({ adminSiteUrl: admin, page: ADMIN_ROUTES.REGISTRATIONS });
	const href = adminUrl + '/wp-admin/admin.php?page=pricing';

	console.log({ href });

	return <Link href={href}>{children}</Link>;
};

export default DefaultPricesLink;
