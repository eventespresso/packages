import { useMemo } from 'react';

import { ReadQueryOptions } from '@eventespresso/data';
import useEventId from '../events/useEventId';
import { GET_EVENT } from './queries';

const useEventQueryOptions = (): ReadQueryOptions => {
	const id = useEventId();

	return useMemo(
		() => ({
			query: GET_EVENT,
			variables: {
				id,
			},
		}),
		[id]
	);
};

export default useEventQueryOptions;
