import { EdtrPlugins } from '@eventespresso/edtr-services';
import { registerPlugin, updatePlugin } from '@eventespresso/plugins';

import { NewDateUpsell } from './upsells';
import EventSmartInit from './EventSmartInit';

registerPlugin('es-container', {
	render: () => <EventSmartInit />,
});

updatePlugin(EdtrPlugins.ADD_SINGLE_DATE, {
	render: (prevRender) => <NewDateUpsell output={prevRender?.()} />,
});
