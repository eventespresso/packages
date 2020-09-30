import { GET_CURRENT_USER } from './queries';
import { CacheQueryOptions } from '../';

const useCurrentUserQueryOptions = (): CacheQueryOptions => {
	const options: CacheQueryOptions = {
		query: GET_CURRENT_USER,
	};

	return options;
};

export default useCurrentUserQueryOptions;
