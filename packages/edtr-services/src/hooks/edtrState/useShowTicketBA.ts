import { makeVar, useReactiveVariable, ReactiveVariable } from '@eventespresso/data';

const showBulkActions = makeVar<boolean>(false);

export const useShowTicketBA = (): ReactiveVariable<boolean> => {
	return useReactiveVariable(showBulkActions);
};
