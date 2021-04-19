import { useCacheRehydration } from '../services';

export const useEditorInitialization = (): void => {
	useCacheRehydration();
};
