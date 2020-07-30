import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { DAYS } from '../../../constants';
import { OnProps } from '../types';
import { useRRuleState } from '../../../hooks';
import { OnChangeSelect } from '../../types';
import { Which, Day } from 'packages/rrule-generator/src/types';

const OnThe: React.FC<OnProps> = ({ id, isTheOnlyMode, onChangeMode }) => {
	const {
		repeat: { monthly },
		setRepeatWhich,
		setRepeatDay,
	} = useRRuleState();

	const isActive = monthly?.mode === 'ON_THE';
	const onThe = monthly?.onThe;

	const onChangeWhich = useCallback<OnChangeSelect>(
		(event) => {
			const value = event.target.value as Which;
			setRepeatWhich('monthly', 'onThe', value);
		},
		[setRepeatWhich]
	);

	const onChangeDay = useCallback<OnChangeSelect>(
		(event) => {
			const value = event.target.value as Day;
			setRepeatDay('monthly', 'onThe', value);
		},
		[setRepeatDay]
	);

	return (
		<div className='rrule-generator__on-the'>
			{!isTheOnlyMode && (
				<label className='rrule-generator__labelled-input'>
					<input
						id={id}
						type='radio'
						name={id}
						aria-label={__('Repeat monthly on the')}
						value='ON_THE'
						checked={isActive}
						onChange={onChangeMode}
					/>
					<span>{__('on the')}</span>
				</label>
			)}

			<select
				id={`${id}-which`}
				name='repeat.monthly.onThe.which'
				aria-label={__('Repeat monthly on the which')}
				className='rrule-generator__form-control'
				value={onThe.which}
				disabled={!isActive}
				onChange={onChangeWhich}
			>
				<option value='FIRST'>{__('First')}</option>
				<option value='SECOND'>{__('Second')}</option>
				<option value='THIRD'>{__('Third')}</option>
				<option value='FOURTH'>{__('Fourth')}</option>
				<option value='LAST'>{__('Last')}</option>
			</select>

			<select
				id={`${id}-day`}
				name='repeat.monthly.onThe.day'
				aria-label={__('Repeat monthly on the day')}
				className='rrule-generator__form-control rrule-generator__month-select'
				value={onThe.day}
				disabled={!isActive}
				onChange={onChangeDay}
			>
				{Object.entries(DAYS).map(([key, day]) => (
					<option key={key} value={key}>
						{day}
					</option>
				))}
			</select>
		</div>
	);
};

export default OnThe;
