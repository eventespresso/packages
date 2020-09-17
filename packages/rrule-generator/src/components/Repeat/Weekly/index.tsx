import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { BaseProps, OnChangeInput } from '../../types';
import { useRRuleState } from '../../../hooks';
import { SHORT_DAYS } from '../../../constants';
import { useIntervalUpdater } from '../../../utils';

import './styles.scss';

const Weekly: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { weekly },
		setRepeatInterval,
		setRepeatWeeklyDays,
	} = useRRuleState();

	const onChangeInterval = useIntervalUpdater('weekly', setRepeatInterval);

	const onChangeDays = useCallback<OnChangeInput>(
		(event) => {
			// replace id to get the day name
			const name = event.target.name?.replace(`${id}-`, '');
			const value = event.target.checked;

			setRepeatWeeklyDays({ [name]: value });
		},
		[id, setRepeatWeeklyDays]
	);

	return (
		<div className='rrule-generator__form-group-row rrule-generator__form-group-row--align-items-start rrule-generator__form-group-row--no-label rrule-generator__repeat-weekly'>
			<label className='rrule-generator__labelled-input'>
				<span>{__('every')}</span>

				<input
					id={`${id}-interval`}
					name='repeat.weekly.interval'
					aria-label={__('Repeat weekly interval')}
					className='rrule-generator__form-control rrule-generator__input'
					type='number'
					onChange={onChangeInterval}
					value={weekly?.interval}
				/>

				<span>{__('week(s)')}</span>
			</label>

			{/* TODO arrange days according to week start day */}
			<div className='rrule-generator__week-day-checkbox-group'>
				{Object.entries(weekly?.days).map(([dayName, isDayActive]) => {
					const dayId = `${id}-${dayName}`;

					return (
						<label htmlFor={dayId} key={dayName} className={isDayActive ? 'active' : ''}>
							<input
								className='rrule-generator__form-control rrule-generator__input'
								type='checkbox'
								id={dayId}
								name={dayId}
								checked={isDayActive}
								onChange={onChangeDays}
							/>
							<span>{SHORT_DAYS?.[dayName]}</span>
						</label>
					);
				})}
			</div>
		</div>
	);
};

export default Weekly;
