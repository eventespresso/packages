import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { Frequency as FrequencyType } from '../../types';
import { useRRuleConfig } from '../../hooks';
import { FrequencyProps } from './types';

const frequencyLabels: { [key in FrequencyType]: string } = {
	YEARLY: __('Yearly'),
	MONTHLY: __('Monthly'),
	WEEKLY: __('Weekly'),
	DAILY: __('Daily'),
	HOURLY: __('Hourly'),
	MINUTELY: __('Minutely'),
	SECONDLY: __('Secondly'),
};
const Frequency: React.FC<FrequencyProps> = ({ id, frequency, onChange }) => {
	const { frequencies: frequencyTypes } = useRRuleConfig();

	const onChangeFrequency = useCallback(
		(event: React.ChangeEvent<HTMLSelectElement>) => {
			onChange(event.target.value as FrequencyType);
		},
		[onChange]
	);
	return (
		<div className='form-group row'>
			<div className='col-sm-2 text-sm-right'>
				<label htmlFor={id} className='col-form-label'>
					<strong>{__('Repeat')}</strong>
				</label>
			</div>
			<div className='col-sm-6'>
				<select id={id} className='form-control' value={frequency} onChange={onChangeFrequency}>
					{frequencyTypes.map((frequencyType) => {
						return (
							<option key={frequencyType} value={frequencyType}>
								{frequencyLabels?.[frequencyType]}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export default Frequency;
