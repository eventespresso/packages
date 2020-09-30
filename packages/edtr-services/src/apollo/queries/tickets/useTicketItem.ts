import { useMemo } from 'react';

import { findEntityByGuid } from '@eventespresso/predicates';

import type { Ticket } from '../../types';
import type { EntityItemProps } from '../types';
import useTickets from './useTickets';

const useTicketItem = ({ id }: EntityItemProps): Ticket => {
	const tickets = useTickets();

	return useMemo(() => findEntityByGuid(tickets)(id), [tickets, id]);
};

export default useTicketItem;
