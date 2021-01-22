import { useEffect } from 'react';

import useTPCDataState from '../data/useTPCDataState';
import type { StateChangeListenerHook } from './types';

const useTicketTotalChangeListener: StateChangeListenerHook = (calculatePrice) => {
	const { ticket } = useTPCDataState();

	// Because of the deps, it will run only when ticket total changes
	useEffect(() => {
		calculatePrice();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ticket?.price]);
};

export default useTicketTotalChangeListener;
