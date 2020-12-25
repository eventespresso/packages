import { useMemo, useEffect } from 'react';

import { useStorageReducer } from 'react-storage-hooks';

export function useSessionStorageReducer<S, A>(
	key: string,
	reducer: React.Reducer<S, A>,
	initialState?: S | (() => S)
): [any, React.Dispatch<React.SetStateAction<any>>] {
	const [state, dispatch, writeError] = useStorageReducer(sessionStorage, key, reducer, initialState);

	useEffect(() => {
		if (writeError) {
			console.error(writeError.name, writeError.message);
		}
	}, [writeError]);

	return useMemo(() => [state, dispatch], [state, dispatch]);
}
