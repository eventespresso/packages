import { makeVar, ReactiveVariable, EntityId, useReactiveVariable } from '@eventespresso/data';

type TicketIds = Array<EntityId>;

const visibleTicketIds = makeVar<TicketIds>([]);

export const useVisibleTicketIds = (): ReactiveVariable<TicketIds> => {
	return useReactiveVariable(visibleTicketIds);
};
