import { IconName, Trash } from '@eventespresso/icons';
import { LegendConfig } from '@eventespresso/components';
import { __ } from '@eventespresso/i18n';

export const legendConfig: LegendConfig<string> = {
	icons: [
		{ icon: IconName.EDIT, description: __('Edit Event Date Details') },
		{ icon: IconName.GROUPS, description: __('View Registrations for this Date') },
		{ icon: IconName.TICKET, description: __('Manage Ticket Assignments') },
		{ icon: Trash, description: __('Move Date to Trash') },
	],
	swatches: {
		DTA: __('Active'),
		DTT: __('Trashed'),
		DTE: __('Expired'),
		DTS: __('Sold Out'),
		DTU: __('Upcoming'),
	},
};
