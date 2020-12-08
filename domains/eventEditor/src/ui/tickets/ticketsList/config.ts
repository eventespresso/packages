import { IconName, Trash } from '@eventespresso/icons';
import { LegendConfig } from '@eventespresso/components';
import { __ } from '@eventespresso/i18n';

export const legendConfig: LegendConfig<string> = {
	icons: [
		{ icon: IconName.EDIT, description: 'Edit Ticket Details' },
		{ icon: IconName.CALENDAR, description: 'Manage Date Assignments' },
		{ icon: IconName.CALCULATOR, description: 'Ticket Price Calculator' },
		{ icon: Trash, description: 'Move Ticket to Trash' },
	],
	swatches: {
		TKA: __('Trashed'),
		TKE: __('Expired'),
		TKO: __('On Sale'),
		TKS: __('Sold Out'),
		TKP: __('Pending'),
	},
};
