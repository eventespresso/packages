import { GET_RECURRENCES } from '../recurrences';
import { RecurrencesList, RecurrencesQueryArgs, ReadQueryOptions } from '@eventespresso/data';
import { RecurrenceEdge } from '../../types';
import { useMemoStringify } from '@eventespresso/hooks';

type RecurrencesQueryOptions = ReadQueryOptions<RecurrencesList<RecurrenceEdge>, RecurrencesQueryArgs>;

const useRecurrenceQueryOptions = (): RecurrencesQueryOptions => {
	const options: RecurrencesQueryOptions = {
		query: GET_RECURRENCES,
		variables: {
			where: {},
		},
	};

	return useMemoStringify(options);
};

export default useRecurrenceQueryOptions;
