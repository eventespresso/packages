import { useMemoStringify } from '@eventespresso/hooks';

import { useConfig, ConfigDataProps } from '../config';

const useSitePermissions = (): ConfigDataProps['permissions'] => {
	const { permissions = [] } = useConfig();

	return useMemoStringify(permissions);
};

export default useSitePermissions;
