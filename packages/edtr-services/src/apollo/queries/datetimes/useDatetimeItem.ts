import { useMemo } from 'react';

import { useCacheQuery, CacheQueryOptions } from '@eventespresso/data';
import { useMemoStringify } from '@eventespresso/hooks';

import { GET_DATETIME } from './queries';
import type { Datetime, DatetimeItem } from '../../types';
import type { EntityItemProps } from '../types';

const useDatetimeItem = ({ id }: EntityItemProps): Datetime => {
	const options = useMemo<CacheQueryOptions>(
		() => ({
			query: GET_DATETIME,
			variables: {
				id,
			},
		}),
		[id]
	);
	const { data } = useCacheQuery<DatetimeItem>(options);

	return useMemoStringify(data?.datetime);
};

export default useDatetimeItem;
