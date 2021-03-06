import { ADMIN_ROUTES, ADMIN_ROUTE_ACTION_DEFAULT } from '@eventespresso/constants';

type Props = {
	action?: string;
	adminSiteUrl: string;
	page?: string;
};

/**
 * Return the admin url for a given page and action.
 */
export const getAdminUrl = ({
	action = ADMIN_ROUTE_ACTION_DEFAULT,
	adminSiteUrl,
	page = ADMIN_ROUTES.EVENTS,
}: Props): string => {
	return adminSiteUrl && `${adminSiteUrl}admin.php?page=${page}&action=${action}`;
};
