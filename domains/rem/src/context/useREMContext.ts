import { useContext } from 'react';
import { Context } from './ContextProvider';
import type { ContextProps } from './types';
import invariant from 'invariant';

const useREMContext = (): ContextProps => {
	const value = useContext(Context);

	invariant(value, 'useREMContext must be used inside REM <ContextProvider> component');

	return value;
};

export default useREMContext;
