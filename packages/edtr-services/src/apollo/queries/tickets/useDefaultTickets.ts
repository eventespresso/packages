import useDefaultTicketsQueryOptions from './useDefaultTicketsQueryOptions';
import useTickets from './useTickets';
import type { Ticket } from '../../types';

const useDefaultTickets = (): Array<Ticket> => {
	const options = useDefaultTicketsQueryOptions();

	return useTickets(options);
};

export default useDefaultTickets;
