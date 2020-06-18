import { GET_GENERAL_SETTINGS } from './queries';
import { ReadQueryOptions } from '../';

const useGeneralSettingsQueryOptions = (): ReadQueryOptions => {
	const options: ReadQueryOptions = {
		query: GET_GENERAL_SETTINGS,
	};

	return options;
};

export default useGeneralSettingsQueryOptions;
