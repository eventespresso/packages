import { useMemo } from 'react';
import { GET_DATETIME } from '../datetimes';
import { Datetime, DatetimeItem } from '../../types';
import { EntityItemProps } from '../types';
import { useCacheQuery, ReadQueryOptions } from '@eventespresso/data';

const useDatetimeItem = ({ id }: EntityItemProps): Datetime => {
	const options: ReadQueryOptions = {
		query: GET_DATETIME,
		variables: {
			id,
		},
	};
	const { data } = useCacheQuery<DatetimeItem>(options);
	const datetime = data?.datetime;

	return useMemo(() => datetime, [datetime]);
};

export default useDatetimeItem;
