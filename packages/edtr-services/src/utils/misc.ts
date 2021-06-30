import { EventEditorData } from '../types';

export const getEdtrDomData = <K extends keyof EventEditorData>(key: K): EventEditorData[K] => {
	return window.eventEspressoData.eventEditor?.[key];
};
