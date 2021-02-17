import { useMemo } from 'react';

import { useConfig, ConfigDataProps } from '../config';

const useSitePermissions = (): ConfigDataProps['sitePermissions'] => {
	const { sitePermissions } = useConfig();

	return useMemo(() => sitePermissions || [], [sitePermissions]);
};

export default useSitePermissions;
