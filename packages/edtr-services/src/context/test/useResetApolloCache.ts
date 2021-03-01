import { useEffect } from 'react';
import { useApolloClient, useIsRehydrated } from '@eventespresso/data';

const useResetApolloCache = (): void => {
	const client = useApolloClient();

	const [, setIsRehydrated] = useIsRehydrated();

	useEffect(() => {
		// Make sure to clear Apollo cache on unmount
		// to avoid any unexpected results.
		return (): void => {
			setIsRehydrated(false);
			client.resetStore();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useResetApolloCache;
