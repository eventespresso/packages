import { useMemoStringify } from '@eventespresso/hooks';

import { useConfig, CurrentUserProps } from '../config';

const useUserCaps = (): CurrentUserProps['espressoCaps'] => {
	const { currentUser } = useConfig();

	return useMemoStringify(currentUser?.espressoCaps || []);
};

export default useUserCaps;
