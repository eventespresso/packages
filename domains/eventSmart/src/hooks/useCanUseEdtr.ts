import { useCurrentUserCan } from '@eventespresso/services';

import { ADVANCED_EDITOR_CAP } from '../constants';

export const useCanUseEdtr = (): boolean => {
	const currentUserCan = useCurrentUserCan();

	return currentUserCan(ADVANCED_EDITOR_CAP);
};
