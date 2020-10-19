import { useCallback, useEffect } from 'react';

import { events } from '@eventespresso/data';
import { useSystemNotifications } from '@eventespresso/toaster';
import type { EventSet } from '@eventespresso/data';

export const useEventsHandler: VoidFunction = () => {
	const toaster = useSystemNotifications();

	const onError = useCallback<EventSet['fetchUser.error']>(
		(error) => {
			toaster.error({ message: error.message });
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	useEffect(() => {
		events.on('fetchUser.error', onError);
		events.on('fetchSettings.error', onError);

		// housekeeping
		return () => {
			events.off('fetchUser.error', onError);
			events.off('fetchSettings.error', onError);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
