import { useMemoStringify } from '@eventespresso/hooks';
import { getGuids } from '@eventespresso/predicates';
import type { EntityId } from '@eventespresso/data';

import useDefaultTickets from './useDefaultTickets';

const useDefaultTicketIds = (): EntityId[] => {
	const tickets = useDefaultTickets();

	return useMemoStringify(getGuids(tickets));
};

export default useDefaultTicketIds;
