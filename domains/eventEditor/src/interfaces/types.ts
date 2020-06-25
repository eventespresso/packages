import type { EEEditorData, EEJSData } from '@eventespresso/edtr-services';

declare global {
	interface Window {
		eeEditorData: EEEditorData;
		eejsdata: EEJSData;
		eeDomain: string;
	}
}
