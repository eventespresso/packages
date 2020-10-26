import { makeVar, useReactiveVariable, ReactiveVariable } from '@eventespresso/data';

const pollInterval = makeVar(0);

const usePricesPollInterval = (): ReactiveVariable<number> => {
	return useReactiveVariable(pollInterval);
};

export default usePricesPollInterval;
