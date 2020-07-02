import { useMemo } from 'react';
import { GET_RECURRENCE } from '../recurrences';
import type { Recurrence, RecurrenceItem } from '../../types';
import type { EntityItemProps } from '@eventespresso/edtr-services';
import { useCacheQuery, ReadQueryOptions } from '@eventespresso/data';

const useRecurrenceItem = ({ id }: EntityItemProps): Recurrence => {
	const options: ReadQueryOptions = {
		query: GET_RECURRENCE,
		variables: {
			id,
		},
	};
	const { data } = useCacheQuery<RecurrenceItem>(options);
	const recurrence = data?.recurrence;

	return useMemo(() => recurrence, [recurrence]);
};

export default useRecurrenceItem;
