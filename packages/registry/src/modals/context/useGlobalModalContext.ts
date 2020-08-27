import { useContext } from 'react';

import { AnyObject } from '@eventespresso/utils';

import { GlobalModalContext } from './GlobalModalProvider';
import type { GlobalModalManager } from './types';

const useGlobalModalContext = <D = AnyObject>(): GlobalModalManager<D> => {
	return useContext(GlobalModalContext) as GlobalModalManager<D>;
};

export default useGlobalModalContext;
