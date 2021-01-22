import { useContext } from 'react';
import invariant from 'invariant';

import { TPCContext } from './TPCContextProvider';
import type { TPCContextProps } from './types';

export const useTPCContext = (): TPCContextProps => {
	const value = useContext(TPCContext);

	invariant(value, 'useTPCContext must be used inside TPC <ContextProvider> component');

	return value;
};
