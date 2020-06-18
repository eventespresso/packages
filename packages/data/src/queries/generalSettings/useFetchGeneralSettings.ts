import { useQuery } from '@apollo/react-hooks';

import { useSystemNotifications } from '@eventespresso/services';
import { GET_GENERAL_SETTINGS } from '.';
import { FetchQueryResult } from '../types';
import { GeneralSettingsData } from '@eventespresso/services';

const useFetchGeneralSettings = (): FetchQueryResult<GeneralSettingsData> => {
  const toaster = useSystemNotifications();

  const { data, error, loading } = useQuery<GeneralSettingsData>(GET_GENERAL_SETTINGS, {
    // only display error, not loading or success
    onError: (error): void => {
      toaster.error({ message: error.message });
    },
  });

  return {
    data,
    error,
    loading,
  };
};

export default useFetchGeneralSettings;
