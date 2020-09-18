import React, { useCallback } from 'react';

import Yearly from './Yearly';
import Monthly from './Monthly';
import Weekly from './Weekly';
import Daily from './Daily';
import Hourly from './Hourly';

import { Frequency as FrequencyType } from '../../types';
import { useRRuleConfig } from '../../hooks';
import { FrequencyProps } from './types';
import { FREQUENCY } from '../../constants';

import './styles.scss';

const Frequency: React.FC<FrequencyProps> = ({ id, frequency, onChange }) => {
	const { frequencies: frequencyTypes } = useRRuleConfig();

	const onChangeFrequency = useCallback(
		(event: React.ChangeEvent<HTMLSelectElement>) => {
			onChange(event.target.value as FrequencyType);
		},
		[onChange]
	);

	return (
		<div className='rrule-generator__frequency'>
			<select
				className='rrule-generator__form-control rrule-generator__select'
				id={id}
				name={id}
				onChange={onChangeFrequency}
				value={frequency}
			>
				{frequencyTypes.map((frequencyType) => {
					return (
						<option key={frequencyType} value={frequencyType}>
							{FREQUENCY?.[frequencyType]}
						</option>
					);
				})}
			</select>

			{frequency === 'YEARLY' && <Yearly id={`${id}-yearly`} />}
			{frequency === 'MONTHLY' && <Monthly id={`${id}-monthly`} />}
			{frequency === 'WEEKLY' && <Weekly id={`${id}-weekly`} />}
			{frequency === 'DAILY' && <Daily id={`${id}-daily`} />}
			{frequency === 'HOURLY' && <Hourly id={`${id}-hourly`} />}
		</div>
	);
};

export default Frequency;
