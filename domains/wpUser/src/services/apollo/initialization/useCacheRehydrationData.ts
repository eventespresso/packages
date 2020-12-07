import { useMemo } from 'react';

import type { WpUserData } from '../../../types';

const useCacheRehydrationData = (): WpUserData => {
	return useMemo(() => window?.eventEspressoData?.wpUserData || {}, []);
};

export default useCacheRehydrationData;
