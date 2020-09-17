import { useInitQueries } from '@eventespresso/edtr-services';
import { useRegisterIsChainedFilter } from '@edtrServices/filterState';

const useEditorInitialization = (): void => {
	// register isChained filter using hook.
	useRegisterIsChainedFilter();

	// Fire initial queries
	useInitQueries();
};

export default useEditorInitialization;
