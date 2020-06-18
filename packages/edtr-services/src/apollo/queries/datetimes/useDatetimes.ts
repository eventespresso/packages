import useDatetimeQueryOptions from './useDatetimeQueryOptions';
import { Datetime, DatetimeEdge } from '../../types';
import { getCacheIds, useMemoStringify } from '@eventespresso/services';
import { useDatetimesQuery } from '@eventespresso/data';

const useDatetimes = (): Array<Datetime> => {
	const options = useDatetimeQueryOptions();
	const { data } = useDatetimesQuery<DatetimeEdge>(options);

	const nodes = data?.espressoDatetimes?.nodes || [];

	const cacheIds = getCacheIds(nodes);

	return useMemoStringify(nodes, cacheIds);
};

export default useDatetimes;
