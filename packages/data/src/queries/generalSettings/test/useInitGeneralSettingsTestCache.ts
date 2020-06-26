import { WriteQueryOptions, useApolloClient } from '@eventespresso/data';
import type { GeneralSettingsData } from '@eventespresso/services';

import useGeneralSettingsQueryOptions from '../useGeneralSettingsQueryOptions';
import { generalSettings as mockedGeneralSettings } from './data';

const useInitGeneralSettingsTestCache = (generalSettings = mockedGeneralSettings): void => {
	// init hooks
	const client = useApolloClient();
	const queryOptions = useGeneralSettingsQueryOptions();

	const writeQueryOptions: WriteQueryOptions<GeneralSettingsData> = {
		...queryOptions,
		data: {
			generalSettings,
		},
	};
	try {
		// write the test data to cache
		client.writeQuery(writeQueryOptions);
	} catch (error) {
		console.error(error);
	}
};
export default useInitGeneralSettingsTestCache;
