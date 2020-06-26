import { useCacheQuery } from '../';
import type { CurrentUserProps, Viewer } from '@eventespresso/services';
import useCurrentUserQueryOptions from './useCurrentUserQueryOptions';

/**
 * A custom react hook for retrieving CurrentUser
 */
const useCurrentUser = (): CurrentUserProps => {
	const options = useCurrentUserQueryOptions();
	const { data } = useCacheQuery<Viewer>(options);

	return data?.viewer;
};

export default useCurrentUser;
