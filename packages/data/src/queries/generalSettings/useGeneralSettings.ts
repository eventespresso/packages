import { GET_GENERAL_SETTINGS } from '.';
import { useCacheQuery, ReadQueryOptions } from '../';
import { GeneralSettings, GeneralSettingsData } from '@eventespresso/services';
/**
 * A custom react hook for retrieving GeneralSettings
 */
const useGeneralSettings = (): GeneralSettings => {
  const options: ReadQueryOptions = {
    query: GET_GENERAL_SETTINGS,
  };
  const { data } = useCacheQuery<GeneralSettingsData>(options);

  return data?.generalSettings;
};

export default useGeneralSettings;
