import { isDefault } from '@eventespresso/predicates';

import useTickets from './useTickets';
import type { Ticket } from '../../types';

const useDefaultTickets = (): Array<Ticket> => {
	return useTickets(isDefault);
};

export default useDefaultTickets;
