import { makeVar } from '@apollo/client';

import { useReactiveVariable, ReactiveVariable } from './useReactiveVariable';

const isRehydrated = makeVar(false);

export const useIsRehydrated = (): ReactiveVariable<boolean> => {
	return useReactiveVariable(isRehydrated);
};
