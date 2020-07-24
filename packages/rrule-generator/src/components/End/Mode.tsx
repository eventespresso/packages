import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { ModeProps } from './types';
import { EndMode } from '../../types';
import { useRRuleConfig } from '../../hooks';

const modeLabels: { [key in EndMode]: string } = {
	AFTER: __('After'),
	NEVER: __('Never'),
	ON_DATE: __('On date'),
};
const Mode: React.FC<ModeProps> = ({ id, mode, onChange }) => {
	const { endModes } = useRRuleConfig();

	const onChangeMode = useCallback(
		(event: React.ChangeEvent<HTMLSelectElement>) => {
			onChange(event.target.value as EndMode);
		},
		[onChange]
	);
	return (
		<div className='col-sm-3'>
			<select id={id} className='form-control' value={mode} onChange={onChangeMode}>
				{endModes.map((endMode) => {
					return (
						<option key={endMode} value={endMode}>
							{modeLabels?.[endMode]}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Mode;
