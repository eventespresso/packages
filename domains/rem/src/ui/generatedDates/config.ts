import { Rotate, PlusCircleFilled, CloseCircleFilled } from '@eventespresso/icons';
import { LegendConfig } from '@eventespresso/components';
import { __ } from '@wordpress/i18n';
import { getBgClassName } from './utils';

import './bg-colors.scss';

export const legendConfig: LegendConfig = {
	icons: [
		{
			bgClassName: getBgClassName('gDate'),
			description: __('Generated: recurring dates that have been created via pattern editors above'),
			icon: Rotate,
		},
		{
			bgClassName: getBgClassName('rDate'),
			description: __('Additions: extra one off single dates that could not be created using the pattern editor'),
			icon: PlusCircleFilled,
		},
		{
			bgClassName: getBgClassName('exDate'),
			description: __(
				'Exceptions: dates that have been created via the pattern editor, but should be skipped or excluded'
			),
			icon: CloseCircleFilled,
		},
	],
};
