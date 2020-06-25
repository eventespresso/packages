import useDatetimeQueryOptions from './useDatetimeQueryOptions';
import type { Datetime, DatetimeEdge } from '../../types';
import { useMemoStringify } from '@eventespresso/services';
import { getCacheIds } from '@eventespresso/predicates';
import { useDatetimesQuery } from '@eventespresso/data';

const useDatetimes = (): Array<Datetime> => {
	const options = useDatetimeQueryOptions();
	const { data } = useDatetimesQuery<DatetimeEdge>(options);

	const nodes = data?.espressoDatetimes?.nodes || [];

	const cacheIds = getCacheIds(nodes);

	return useMemoStringify(nodes, cacheIds);
};

export default useDatetimes;
