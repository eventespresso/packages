import { __ } from '@eventespresso/i18n';
import { Button, Select } from '@eventespresso/ui-components';

import type { SortByControlProps } from './types';

import './style.scss';

export const SortByControl: React.FC<SortByControlProps> = ({ label, onChangeValue, options, value }) => {
	return (
		<div className='ee-sort-by-control'>
			<Select
				id='dates-list-sort-by-control'
				label={label}
				options={options}
				onChangeValue={onChangeValue}
				value={value}
			/>
			<Button noMargin>{__('reorder dates')}</Button>
		</div>
	);
};
