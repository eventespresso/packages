import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import { range } from 'ramda';

import { useRRuleState } from '../../../hooks';
import { OnProps } from '../types';
import { OnChangeSelect } from '../../types';
import { getNumericValue } from '../../../utils';

const On: React.FC<OnProps> = ({ id, isTheOnlyMode, onChangeMode }) => {
	const {
		repeat: { monthly },
		setRepeatDay,
	} = useRRuleState();

	const isActive = monthly?.mode === 'ON';
	const on = monthly?.on;

	const onChangeDay = useCallback<OnChangeSelect>(
		(event) => {
			setRepeatDay('monthly', 'on', getNumericValue(event.target.value));
		},
		[setRepeatDay]
	);

	return (
		<div className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
			<div className=' '>
				{!isTheOnlyMode && (
					<input
						id={id}
						type='radio'
						name={id}
						aria-label={__('Repeat monthly on')}
						value='ON'
						checked={isActive}
						onChange={onChangeMode}
					/>
				)}
			</div>
			<div className=''>{__('on day')}</div>

			<div className=''>
				<select
					id={`${id}-day`}
					name='repeat.monthly.on.day'
					aria-label={__('Repeat monthly on a day')}
					className='rrule-generator__form-control'
					value={on.day}
					disabled={!isActive}
					onChange={onChangeDay}
				>
					{range(1, 32).map((day) => (
						<option key={day} value={day}>
							{day}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default On;
