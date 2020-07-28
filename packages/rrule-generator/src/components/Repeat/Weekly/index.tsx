import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { BaseProps, OnChangeInput } from '../../types';
import { useRRuleState } from '../../../hooks';
import { SHORT_DAYS } from '../../../constants';
import { useIntervalUpdater } from '../../../utils';

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
		<div className='px-3'>
			<div className='form-group row d-flex align-items-sm-center'>
				<div className='col-sm-1 offset-sm-2'>{__('every')}</div>
				<div className='col-sm-3'>
					<input
						id={`${id}-interval`}
						name='repeat.weekly.interval'
						aria-label={__('Repeat weekly interval')}
						className='form-control'
						value={weekly?.interval}
						onChange={onChangeInterval}
					/>
				</div>
				<div className='col-sm-1'>{__('week(s)')}</div>
			</div>

			<div className='form-group row'>
				<div className='btn-group btn-group-toggle offset-sm-2'>
					{/* TODO arrange days according to week start day */}
					{Object.entries(weekly?.days).map(([dayName, isDayActive]) => (
						<label
							htmlFor={`${id}-${dayName}`}
							key={dayName}
							className={`btn btn-primary ${isDayActive ? 'active' : ''}`}
						>
							<input
								type='checkbox'
								id={`${id}-${dayName}`}
								name={`${id}-${dayName}`}
								className='form-control'
								checked={isDayActive}
								onChange={onChangeDays}
							/>
							{SHORT_DAYS?.[dayName]}
						</label>
					))}
				</div>
			</div>
		</div>
	);
};

export default Weekly;
