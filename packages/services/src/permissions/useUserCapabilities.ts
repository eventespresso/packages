import { useMemoStringify } from '@eventespresso/hooks';

import { useConfig, CurrentUserProps } from '../config';

const useUserCapabilities = (): CurrentUserProps['capabilities'] => {
	const { currentUser } = useConfig();

	return useMemoStringify(currentUser?.capabilities || []);
};

export default useUserCapabilities;
