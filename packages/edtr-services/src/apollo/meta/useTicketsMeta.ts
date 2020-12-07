import { makeVar } from '@eventespresso/data';
import { useEntityMeta, ManageEntityMeta } from '@eventespresso/services';

const ticketsMeta = makeVar({});

export const useTicketsMeta = (): ManageEntityMeta => {
	return useEntityMeta(ticketsMeta);
};
