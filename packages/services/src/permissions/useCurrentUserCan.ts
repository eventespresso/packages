import { useCallback } from 'react';

import useSitePermissions from './useSitePermissions';
import useUserCapabilities from './useUserCapabilities';
import type { CurrentUserCan } from './types';

/**
 * Returns a callback to check whether current user has a capability.
 * @example
 * const currentUserCan = useCurrentUserCan();
 *
 * if (currentUserCan('use_bulk_edit'))
 *
 * @returns {CurrentUserCan}
 */
const useCurrentUserCan = (): CurrentUserCan => {
	const sitePermissions = useSitePermissions();
	const userCapabilities = useUserCapabilities();

	return useCallback<CurrentUserCan>(
		(capability) => {
			// whether the site has the capability
			const siteHasPermissions = sitePermissions?.includes(capability);
			// whether the user has the capability
			const userHasPermissions = userCapabilities?.includes(capability);

			return siteHasPermissions && userHasPermissions;
		},
		[sitePermissions, userCapabilities]
	);
};

export default useCurrentUserCan;
