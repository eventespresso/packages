import { useEventsHandler, useCacheRehydration } from '@eventespresso/edtr-services';

const useEditorInitialization = (): void => {
	useCacheRehydration();

	// register global event handlers
	useEventsHandler();
};

export default useEditorInitialization;
