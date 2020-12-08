import { __ } from '@eventespresso/i18n';
import getRelationIcon from '../../components/table/getRelationIcon';
import type { LegendConfig } from '@eventespresso/components';
import type { RelationClassName } from '../../types';

export const legendConfig: LegendConfig<RelationClassName> = {
	icons: [
		{
			className: 'old-assignment',
			description: __('existing relation'),
			icon: getRelationIcon('OLD'),
		},
		{
			className: 'removed-assignment',
			description: __('remove existing relation'),
			icon: getRelationIcon('REMOVED'),
		},
		{
			className: 'new-assignment',
			description: __('add new relation'),
			icon: getRelationIcon('NEW'),
		},
		{
			className: 'no-assignments',
			description: __('invalid relation'),
			icon: getRelationIcon(),
		},
	],
};
