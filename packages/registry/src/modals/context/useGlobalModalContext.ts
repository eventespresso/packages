import { useContext } from 'react';
import { GlobalModalContext } from './GlobalModalProvider';
import type { GlobalModalManager } from './types';

const useGlobalModalContext = (): GlobalModalManager => {
	return useContext(GlobalModalContext);
};

export default useGlobalModalContext;
