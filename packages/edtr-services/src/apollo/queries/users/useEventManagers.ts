import { useMemoStringify } from '@eventespresso/hooks';

import type { EventManager } from '../../types';

const useEventManagers = (): Array<EventManager> => {
	return useMemoStringify(window.eventEspressoData?.eventEditor?.eventManagers || []);
};

export default useEventManagers;
