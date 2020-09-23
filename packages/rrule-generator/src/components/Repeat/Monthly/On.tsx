import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';
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
		<div className='rrule-generator__on'>
			{!isTheOnlyMode && (
				<label className='rrule-generator__labelled-input'>
					<input
						aria-label={__('Repeat monthly on')}
						className='rrule-generator__input-radio'
						id={id}
						name={id}
						type='radio'
						value='ON'
						checked={isActive}
						onChange={onChangeMode}
					/>
					<span>{__('on day')}</span>
				</label>
			)}

			<select
				id={`${id}-day`}
				name={`${id}-day`}
				aria-label={__('Repeat monthly on a day')}
				className='rrule-generator__form-control rrule-generator__select rrule-generator__day'
				value={on.day}
				disabled={!isActive}
				onBlur={onChangeDay}
				onChange={onChangeDay}
			>
				{range(1, 32).map((day) => (
					<option key={day} value={day}>
						{day}
					</option>
				))}
			</select>
		</div>
	);
};

export default On;
