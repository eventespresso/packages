import { useContext } from 'react';
import invariant from 'invariant';

import { Context } from './ContextProvider';
import type { ContextProps } from './types';

const useTPCContext = (): ContextProps => {
	const value = useContext(Context);

	invariant(value, 'useTPCContext must be used inside TPC <ContextProvider> component');

	return value;
};

export default useTPCContext;
