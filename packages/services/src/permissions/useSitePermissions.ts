import { useMemoStringify } from '@eventespresso/hooks';

import { useConfig, ConfigDataProps } from '../config';

const useSitePermissions = (): ConfigDataProps['sitePermissions'] => {
	const { sitePermissions } = useConfig();
	return useMemoStringify(sitePermissions || []);
};

export default useSitePermissions;
