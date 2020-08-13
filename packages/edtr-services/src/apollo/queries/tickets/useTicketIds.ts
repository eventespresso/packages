import { useMemoStringify } from '@eventespresso/hooks';
import { getGuids } from '@eventespresso/predicates';
import { EntityId } from '@eventespresso/data';
import useTickets from './useTickets';

const useTicketIds = (): EntityId[] => {
	const tickets = useTickets();

	return useMemoStringify(getGuids(tickets));
};

export default useTicketIds;
