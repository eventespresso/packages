import React, { useEffect, useMemo } from 'react';
import { useStorageState } from 'react-storage-hooks';

export function useSessionStorageState<S>(
	key: string,
	defaultState?: S | (() => S)
): [S, React.Dispatch<React.SetStateAction<S>>] {
	const [state, setState, writeError] = useStorageState(sessionStorage, key, defaultState);

	useEffect(() => {
		if (writeError) {
			console.error(writeError.name, writeError.message);
		}
	}, [writeError]);

	return useMemo(() => [state, setState], [setState, state]);
}
