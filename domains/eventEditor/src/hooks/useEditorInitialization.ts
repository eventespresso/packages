import { useInitQueries } from '@eventespresso/edtr-services';
import { useRegisterIsChainedFilter, useEventsHandler } from '@eventespresso/edtr-services';

const useEditorInitialization = (): void => {
	// register isChained filter using hook.
	useRegisterIsChainedFilter();

	// register global event handlers
	useEventsHandler();

	// Fire initial queries
	useInitQueries();
};

export default useEditorInitialization;
