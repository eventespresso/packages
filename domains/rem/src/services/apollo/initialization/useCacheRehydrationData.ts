import { useMemo } from 'react';

import type { RemDomData } from '../../../types';

const useCacheRehydrationData = (): RemDomData => {
	return useMemo(() => window?.eventEspressoData?.rem || {}, []);
};

export default useCacheRehydrationData;
