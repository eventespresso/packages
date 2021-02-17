import { useMemo } from 'react';
import { useCurrentUser, User } from '@eventespresso/data';

const useUserCapabilities = (): User['capabilities'] => {
	const currentUser = useCurrentUser();

	return useMemo(() => currentUser?.capabilities || [], [currentUser?.capabilities]);
};

export default useUserCapabilities;
