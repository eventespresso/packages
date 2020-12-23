import React from 'react';
import { __ } from '@eventespresso/i18n';

import Frequency from './Frequency';
import { useRRuleState } from '../../hooks';
import type { BaseProps } from '../types';

const Repeat: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { frequency },
		setRepeatFrequency,
	} = useRRuleState();

	const frequencyId = `${id}-frequency`;

	return (
		<div className='rrule-generator__form-group-row rrule-generator__form-group-row--align-items-start'>
			<label htmlFor={frequencyId} className='col-form-label'>
				<strong>{__('Repeat')}</strong>
			</label>

			<Frequency frequency={frequency} id={frequencyId} onChange={setRepeatFrequency} />
		</div>
	);
};
export default Repeat;
