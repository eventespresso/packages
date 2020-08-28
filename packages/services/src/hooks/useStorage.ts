import { useMemo, useEffect } from 'react';
import { useStorageReducer } from 'react-storage-hooks';

import { useSystemNotifications } from '@eventespresso/toaster';

export function useSessionStorageReducer<S, A>(
	key: string,
	reducer: React.Reducer<S, A>,
	initialState?: S | (() => S)
): [any, React.Dispatch<React.SetStateAction<any>>] {
	const toaster = useSystemNotifications();
	const [state, dispatch, writeError] = useStorageReducer(sessionStorage, key, reducer, initialState);

	useEffect(() => {
		if (writeError) {
			toaster.error({ message: writeError.message });
		}
	}, [toaster, writeError]);

	return useMemo(() => [state, dispatch], [state, dispatch]);
}
