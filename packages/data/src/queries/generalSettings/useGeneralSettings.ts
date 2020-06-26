import { useCacheQuery } from '../';
import { GeneralSettings, GeneralSettingsData } from '@eventespresso/services';
import useGeneralSettingsQueryOptions from './useGeneralSettingsQueryOptions';
/**
 * A custom react hook for retrieving GeneralSettings
 */
const useGeneralSettings = (): GeneralSettings => {
	const options = useGeneralSettingsQueryOptions();
	const { data } = useCacheQuery<GeneralSettingsData>(options);

	return data?.generalSettings;
};

export default useGeneralSettings;
