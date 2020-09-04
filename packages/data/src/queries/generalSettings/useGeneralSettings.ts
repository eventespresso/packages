import { useMemoStringify } from '@eventespresso/hooks';
import type { GeneralSettings, GeneralSettingsData } from '@eventespresso/services';

import useGeneralSettingsQueryOptions from './useGeneralSettingsQueryOptions';
import { useCacheQuery } from '../';

/**
 * A custom react hook for retrieving GeneralSettings
 */
const useGeneralSettings = (): GeneralSettings => {
	const options = useGeneralSettingsQueryOptions();
	const { data } = useCacheQuery<GeneralSettingsData>(options);

	return useMemoStringify(data?.generalSettings);
};

export default useGeneralSettings;
