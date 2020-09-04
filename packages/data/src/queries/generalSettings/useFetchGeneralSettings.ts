import { useQuery } from '@apollo/react-hooks';

import { useSystemNotifications } from '@eventespresso/toaster';
import { GET_GENERAL_SETTINGS } from '.';
import type { FetchQueryResult } from '../types';
import type { GeneralSettingsData } from '@eventespresso/services';

const useFetchGeneralSettings = (): FetchQueryResult<GeneralSettingsData> => {
	const toaster = useSystemNotifications();

	const result = useQuery<GeneralSettingsData>(GET_GENERAL_SETTINGS, {
		// only display error, not loading or success
		onError: (error): void => {
			toaster.error({ message: error.message });
		},
	});

	return result;
};

export default useFetchGeneralSettings;
