import { EntityId, makeVar, useReactiveVariable, ReactiveVariable } from '@eventespresso/data';

type DatetimeIds = Array<EntityId>;

const visibleDatetimeIds = makeVar<DatetimeIds>([]);

export const useVisibleDatetimeIds = (): ReactiveVariable<DatetimeIds> => {
	return useReactiveVariable(visibleDatetimeIds);
};
