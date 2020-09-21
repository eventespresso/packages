import { useQuery } from '@apollo/react-hooks';

import { GET_GENERAL_SETTINGS } from '.';
import type { FetchQueryResult } from '../types';
import type { GeneralSettingsData } from '@eventespresso/services';

const useFetchGeneralSettings = (): FetchQueryResult<GeneralSettingsData> => {
	const result = useQuery<GeneralSettingsData>(GET_GENERAL_SETTINGS, {
		// only display error, not loading or success
		onError: (error): void => {
			console.error(error.message);
		},
	});

	return result;
};

export default useFetchGeneralSettings;
