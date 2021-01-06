import { __ } from '@eventespresso/i18n';
import { Button, Select } from '@eventespresso/ui-components';

import type { SortByControlProps } from './types';

import './style.scss';

export const SortByControl: React.FC<SortByControlProps> = ({ entityType, label, onChangeValue, options, value }) => {
	return (
		<div className='ee-sort-by-control'>
			<Select
				id='dates-list-sort-by-control'
				label={label}
				options={options}
				onChangeValue={onChangeValue}
				value={value}
			/>
			<Button noBoxShadow noMargin>
				{entityType === 'datetimes' && __('reorder dates')}
				{entityType === 'tickets' && __('reorder tickets')}
			</Button>
		</div>
	);
};
