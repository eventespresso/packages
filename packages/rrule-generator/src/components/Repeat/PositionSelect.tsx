import { Select } from '@eventespresso/ui-components';

import { WHICH } from '../../constants';
import type { PositionSelectProps } from './types';

const PositionSelect: React.FC<PositionSelectProps> = ({ id, isActive, onChangeWhich, value, ...props }) => (
	<Select
		aria-label={props['aria-label']}
		id={`${id}-which`}
		name={`${id}-which`}
		className='rrule-generator__select'
		isDisabled={!isActive}
		onBlur={onChangeWhich}
		onChange={onChangeWhich}
		value={value}
	>
		{Object.entries(WHICH).map(([key, label]) => (
			<option key={key} value={key}>
				{label}
			</option>
		))}
	</Select>
);

export default PositionSelect;
