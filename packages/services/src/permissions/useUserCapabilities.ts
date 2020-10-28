import { useMemoStringify } from '@eventespresso/hooks';
import type { User } from '@eventespresso/data';

import { useConfig } from '../config';

const useUserCapabilities = (): User['capabilities'] => {
	const { currentUser } = useConfig();

	return useMemoStringify(currentUser?.capabilities || []);
};

export default useUserCapabilities;
