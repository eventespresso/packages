import { CloseCircleFilled, PlusCircleFilled, Repeat, Trash } from '@eventespresso/icons';
import { LegendConfig } from '@eventespresso/components';
import { __ } from '@eventespresso/i18n';
import { getBgClassName } from './utils';

import './bg-colors.scss';

export const legendConfig: LegendConfig = {
	icons: [
		{
			bgClassName: getBgClassName('gDate'),
			description: __('Generated: recurring dates that have been created via pattern editors'),
			icon: Repeat,
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
			bgClassName: 'ee-generated-date--add',
			description: __('Undo Exclusion: undo an exclusion and add a date back into list of generated dates'),
			icon: PlusCircleFilled,
		},
		{
			bgClassName: 'ee-generated-date--remove',
			description: __(
				'Undo Addition: undo an extra one off single date and remove it from list of generated dates'
			),
			icon: CloseCircleFilled,
		},
		{
			bgClassName: 'ee-generated-date--trash',
			description: __('Remove Date: extra one off exclusions, removes dates created by the pattern editor'),
			icon: Trash,
		},
	],
};
