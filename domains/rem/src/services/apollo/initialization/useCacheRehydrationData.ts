import { useMemo } from 'react';

import type { RemDomData } from '../../../types';

const useCacheRehydrationData = (): RemDomData => {
	return useMemo(() => window?.eventEspressoData?.remEditorData || {}, []);
};

export default useCacheRehydrationData;
