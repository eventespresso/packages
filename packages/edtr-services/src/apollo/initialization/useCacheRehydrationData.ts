import { useMemo } from 'react';
import { EditorData, EventEditorData } from '../../types';

const useCacheRehydrationData = (): EditorData => {
	return useMemo(() => {
		const { currentUser, generalSettings } = window?.eventEspressoData?.config || {};
		const eventEditor: EventEditorData = window?.eventEspressoData?.eventEditor || {};

		return { currentUser, eventEditor, generalSettings };
	}, []);
};

export default useCacheRehydrationData;
