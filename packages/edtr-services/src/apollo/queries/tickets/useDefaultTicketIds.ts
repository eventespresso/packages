import { useMemoStringify } from '@eventespresso/hooks';
import { getGuids } from '@eventespresso/predicates';
import type { EntityId } from '@eventespresso/data';

import useDefaultTickets from './useDefaultTickets';

const useDefaultTicketIds = (): EntityId[] => {
	const defaulttickets = useDefaultTickets();

	return useMemoStringify(getGuids(defaulttickets));
};

export default useDefaultTicketIds;
