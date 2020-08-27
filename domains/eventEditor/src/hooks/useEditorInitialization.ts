import { setLocaleData } from '@wordpress/i18n';

import { useI18nData, useInitQueries } from '@eventespresso/edtr-services';
import { useRegisterIsChainedFilter } from '@edtrServices/filterState';

const useEditorInitialization = (): void => {
	// init i18n
	const localeData = useI18nData();
	setLocaleData(localeData);

	// register isChained filter using hook.
	useRegisterIsChainedFilter();

	// Fire initial queries
	useInitQueries();
};

export default useEditorInitialization;
