import { useMemo } from 'react';
import { EditorData } from '../../types';

const useCacheRehydrationData = (): EditorData => {
	return useMemo(() => {
		const { currentUser, generalSettings } = window?.eventEspressoData?.config || {};
		const eventEditor = window?.eventEspressoData?.eventEditor || {};

		return { currentUser, eventEditor, generalSettings };
	}, []);
};

export default useCacheRehydrationData;
