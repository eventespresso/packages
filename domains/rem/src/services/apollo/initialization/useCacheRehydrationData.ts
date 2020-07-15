import { RemDomData } from '../../../types';

const useCacheRehydrationData = (): RemDomData => {
	return window?.eventEspressoData?.rem || {};
};

export default useCacheRehydrationData;
