import { useMemo } from 'react';
import { QueryHookOptions, useQuery } from '@apollo/react-hooks';

import { GET_GENERAL_SETTINGS } from '.';
import { events } from '../../events';
import type { FetchQueryResult } from '../types';
import type { GeneralSettingsData } from '@eventespresso/services';

const useFetchGeneralSettings = (): FetchQueryResult<GeneralSettingsData> => {
	const options = useMemo<QueryHookOptions<GeneralSettingsData>>(
		() => ({
			// only display error, not loading or success
			onError: (error): void => {
				events.emit('fetchSettings.error', error);
			},
		}),
		[]
	);
	const result = useQuery<GeneralSettingsData>(GET_GENERAL_SETTINGS, options);

	return result;
};

export default useFetchGeneralSettings;
