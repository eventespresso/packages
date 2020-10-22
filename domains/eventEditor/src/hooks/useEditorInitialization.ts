import { useInitQueries } from '@eventespresso/edtr-services';
import { useEventsHandler } from '@eventespresso/edtr-services';

const useEditorInitialization = (): void => {
	// register global event handlers
	useEventsHandler();

	// Fire initial queries
	useInitQueries();
};

export default useEditorInitialization;
