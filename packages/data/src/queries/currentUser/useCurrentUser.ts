import { useMemoStringify } from '@eventespresso/hooks';
import type { CurrentUserProps, Viewer } from '@eventespresso/services';

import useCurrentUserQueryOptions from './useCurrentUserQueryOptions';
import { useCacheQuery } from '../';

/**
 * A custom react hook for retrieving CurrentUser
 */
const useCurrentUser = (): CurrentUserProps => {
	const options = useCurrentUserQueryOptions();
	const { data } = useCacheQuery<Viewer>(options);

	return useMemoStringify(data?.viewer);
};

export default useCurrentUser;
