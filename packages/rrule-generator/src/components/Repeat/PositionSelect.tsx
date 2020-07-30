import React from 'react';
import { __ } from '@wordpress/i18n';

import { PositionSelectProps } from './types';

const PositionSelect: React.FC<PositionSelectProps> = ({ id, isActive, name, onChangeWhich, value, ...props }) => (
	<select
		aria-label={props['aria-label']}
		id={`${id}-which`}
		name={name}
		className='rrule-generator__form-control'
		value={value}
		disabled={!isActive}
		onChange={onChangeWhich}
	>
		<option value='FIRST'>{__('First')}</option>
		<option value='SECOND'>{__('Second')}</option>
		<option value='THIRD'>{__('Third')}</option>
		<option value='FOURTH'>{__('Fourth')}</option>
		<option value='LAST'>{__('Last')}</option>
	</select>
);

export default PositionSelect;
