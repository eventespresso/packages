import { makeVar, useReactiveVariable, ReactiveVariable } from '@eventespresso/data';

const isRehydrated = makeVar(false);

export const useIsRehydrated = (): ReactiveVariable<boolean> => {
	return useReactiveVariable(isRehydrated);
};
