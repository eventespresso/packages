import { useMemo } from 'react';
import { concat, uniq } from 'ramda';

import useSitePermissions from './useSitePermissions';
import useUserCapabilities from './useUserCapabilities';

const usePermissions = (): Array<string> => {
	const sitePermissions = useSitePermissions();
	const userPermissions = useUserCapabilities();

	return useMemo(() => {
		// set those permissions/features which are enabled for user as well as the site
		return uniq(concat(userPermissions, sitePermissions));
	}, [sitePermissions, userPermissions]);
};

export default usePermissions;
