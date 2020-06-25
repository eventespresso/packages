import { EEEditorData } from '../../types';

const useCacheRehydrationData = (): EEEditorData => {
	const { event, currentUser, generalSettings } = window?.eeEditorData || {};

	return { event, currentUser, generalSettings };
};

export default useCacheRehydrationData;
