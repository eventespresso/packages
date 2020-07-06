import type { EventEditorData } from '@eventespresso/edtr-services';
import type { WpPluginsPageData } from '@eventespresso/wp-plugins-page/src/types';
import type { EventEspressoDomData } from '@eventespresso/services';

/**
 * This is the global object
 */
export interface EventEspressoData extends EventEspressoDomData {
	eventEditor?: EventEditorData;
	wpPluginsPage?: WpPluginsPageData;
}

declare global {
	interface Window {
		eventEspressoData: EventEspressoData;
	}
}
