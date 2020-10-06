import { useMemo } from 'react';

import { RemDomData } from '../../../types';

const useCacheRehydrationData = (): RemDomData => {
	return useMemo(() => window?.eventEspressoData?.rem || {}, []);
};

export default useCacheRehydrationData;
