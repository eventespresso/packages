import React from 'react';

import { PositionSelectProps } from './types';
import { WHICH } from '../../constants';

const PositionSelect: React.FC<PositionSelectProps> = ({ id, isActive, onChangeWhich, value, ...props }) => (
	<select
		aria-label={props['aria-label']}
		id={`${id}-which`}
		name={`${id}-which`}
		className='rrule-generator__form-control rrule-generator__select'
		value={value}
		disabled={!isActive}
		onChange={onChangeWhich}
	>
		{Object.entries(WHICH).map(([key, label]) => (
			<option key={key} value={key}>
				{label}
			</option>
		))}
	</select>
);

export default PositionSelect;
