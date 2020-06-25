import { useEffect } from 'react';
import { useStatus, TypeName } from '@eventespresso/services';

const useSetGlobalStatusFlags = (): void => {
	const { setIsLoaded, isLoaded } = useStatus();

	useEffect(() => {
		// Set loaded status for all entities
		for (const entity in TypeName) {
			if (!isLoaded(TypeName[entity])) {
				setIsLoaded(TypeName[entity], true);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useSetGlobalStatusFlags;
