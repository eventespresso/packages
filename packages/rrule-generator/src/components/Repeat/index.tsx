import React from 'react';
import { __ } from '@wordpress/i18n';

import { BaseProps } from '../types';
import Frequency from './Frequency';
import { useRRuleState } from '../../hooks';

import '../styles.scss';

const Repeat: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { frequency },
		setRepeatFrequency,
	} = useRRuleState();

	return (
		<div className='rrule-generator__form-group-row rrule-generator__form-group-row--align-items-start'>
			<label htmlFor={id} className='col-form-label'>
				<strong>{__('Repeat')}</strong>
			</label>

			<Frequency frequency={frequency} id={`${id}-frequency`} onChange={setRepeatFrequency} />
		</div>
	);
};
export default Repeat;
