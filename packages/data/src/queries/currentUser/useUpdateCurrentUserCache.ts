import { CacheUpdaterFn, WriteQueryOptions } from '../types';
import useUpdateCache from '../useUpdateCache';
import { Viewer } from '@eventespresso/services';

const useUpdateCurrentUserCache = (
	writeQueryOptions: WriteQueryOptions<Viewer> = undefined
): CacheUpdaterFn<Viewer> => {
	return useUpdateCache<Viewer>(writeQueryOptions);
};

export default useUpdateCurrentUserCache;
