import { EdtrSlots } from '@eventespresso/services';
import { isPluginRegistered, registerPlugin, updatePlugin } from '@eventespresso/plugins';

import { AddNewDateUpsell, GenericUpsell } from './upsells';
import EventSmartInit from './EventSmartInit';

registerPlugin('es-container', {
	render: () => <EventSmartInit />,
});

updatePlugin(EdtrSlots.ADD_SINGLE_DATE_OPTION, {
	render: (prevRender) => <AddNewDateUpsell output={prevRender?.()} slot={EdtrSlots.ADD_SINGLE_DATE_OPTION} />,
});

// if the plugin is already registered (by REM), we may just update it
const recDatePluginFn = isPluginRegistered(EdtrSlots.ADD_RECURRING_DATE_OPTION) ? updatePlugin : registerPlugin;
recDatePluginFn(EdtrSlots.ADD_RECURRING_DATE_OPTION, {
	render: (prevRender) => <AddNewDateUpsell output={prevRender?.()} slot={EdtrSlots.ADD_RECURRING_DATE_OPTION} />,
});

registerPlugin('edtr-upsells', {
	render: () => <GenericUpsell />,
});
