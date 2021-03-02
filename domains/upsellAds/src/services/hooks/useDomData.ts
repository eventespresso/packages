import { UpsellAdEditorData } from '../types';

export const useDomData = (): UpsellAdEditorData => {
	return window.eventEspressoData?.upsellAdEditor;
};
