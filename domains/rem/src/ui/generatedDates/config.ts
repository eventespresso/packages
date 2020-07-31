import { Rotate, PlusCircleFilled, CloseCircleFilled, Lock, InfoCircleFilled } from '@eventespresso/icons';
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
		{
			bgClassName: getBgClassName('locked'),
			description: __(
				'Locked: dates that can NOT be edited because ticket sales or registrations have already occurred'
			),
			icon: Lock,
		},
		{
			bgClassName: getBgClassName('expired'),
			description: __('Expired: dates that have already occured and are now in the past'),
			icon: InfoCircleFilled,
		},
	],
};
