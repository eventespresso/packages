import useTickets from './useTickets';
import { EntityId } from '@eventespresso/data';
import { getGuids } from '@eventespresso/predicates';

const useTicketIds = (): EntityId[] => {
	const tickets = useTickets();

	return getGuids(tickets);
};

export default useTicketIds;
