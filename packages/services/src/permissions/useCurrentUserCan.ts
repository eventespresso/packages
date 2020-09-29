import { useCallback } from 'react';

import useSitePermissions from './useSitePermissions';
import useUserCaps from './useUserCaps';
import type { CurrentUserCan } from './types';

/**
 * Returns a callback to check whether current has a capability.
 * @example
 * const currentUserCan = useCurrentUserCan();
 *
 * if (currentUserCan('use_bulk_edit'))
 *
 * @returns {CurrentUserCan}
 */
const useCurrentUserCan = (): CurrentUserCan => {
	const sitePermissions = useSitePermissions();
	const userPermissions = useUserCaps();

	return useCallback<CurrentUserCan>(
		(capability) => {
			// whether the site has the capability
			const siteHasPermissions = sitePermissions?.includes(capability);
			// whether the user has the capability
			const userHasPermissions = userPermissions?.includes(capability);

			return siteHasPermissions && userHasPermissions;
		},
		[sitePermissions, userPermissions]
	);
};

export default useCurrentUserCan;
