import { useCallback, useMemo, useRef } from 'react';

import { AnyObject } from '@eventespresso/utils';
import type { TPCDataState } from '@eventespresso/edtr-services';

export interface ManageTPCStates {
	setTPCState: (dataState: TPCDataState) => void;
	getDataStates: () => AnyObject<TPCDataState>;
}

export const useManageTPCStates = (): ManageTPCStates => {
	/**
	 * This contains the data for all TPC instances.
	 *
	 * Since this is not used anywhere in the view, rather only used on final submission
	 * useRef is made for this, to avoid any unnecessary re-renders
	 */
	const dataStates = useRef<AnyObject<TPCDataState>>({});

	const setTPCState = useCallback<ManageTPCStates['setTPCState']>(
		(dataState) => {
			dataStates.current = { ...dataStates.current, [dataState?.ticket?.id]: dataState };
		},
		[dataStates]
	);

	const getDataStates = useCallback<ManageTPCStates['getDataStates']>(() => dataStates.current, [dataStates]);

	return useMemo(() => ({ setTPCState, getDataStates }), [setTPCState, getDataStates]);
};
