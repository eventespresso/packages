import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { MONTHS, DAYS } from '../../../constants';
import { OnProps } from './types';
import { useRRuleState } from '../../../hooks';
import { OnChangeSelect } from '../../types';
import { Which, Month, Day } from '../../../types';

const OnThe: React.FC<OnProps> = ({ id, isTheOnlyMode, onChangeMode }) => {
	const {
		repeat: { yearly },
		setRepeatMonth,
		setRepeatWhich,
		setRepeatDay,
	} = useRRuleState();

	const isActive = yearly?.mode === 'ON_THE';
	const onThe = yearly?.onThe;

	const onChangeWhich = useCallback<OnChangeSelect>(
		(event) => {
			const value = event.target.value as Which;
			setRepeatWhich('yearly', 'onThe', value);
		},
		[setRepeatWhich]
	);

	const onChangeDay = useCallback<OnChangeSelect>(
		(event) => {
			const value = event.target.value as Day;
			setRepeatDay('yearly', 'onThe', value);
		},
		[setRepeatDay]
	);

	const onChangeMonth = useCallback<OnChangeSelect>(
		(event) => {
			const value = event.target.value as Month;
			setRepeatMonth('onThe', value);
		},
		[setRepeatMonth]
	);

	return (
		<div className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
			<div className='col-sm-1 offset-sm-2'>
				{!isTheOnlyMode && (
					<input
						id={id}
						type='radio'
						aria-label='Repeat yearly on the'
						name='repeat.yearly.mode'
						checked={isActive}
						value='ON_THE'
						onChange={onChangeMode}
					/>
				)}
			</div>
			<div className='col-sm-1'>{__('on the')}</div>

			<div className='col-sm-2'>
				<select
					id={`${id}-which`}
					name='repeat.yearly.onThe.which'
					aria-label='Repeat yearly on the which'
					className='form-control'
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
			</div>

			<div className='col-sm-3'>
				<select
					id={`${id}-day`}
					name='repeat.yearly.onThe.day'
					aria-label='Repeat yearly on the day'
					className='form-control'
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

			<div className='col-sm-1'>{__('of')}</div>

			<div className='col-sm-2'>
				<select
					id={`${id}-month`}
					name='repeat.yearly.onThe.month'
					aria-label='Repeat yearly on the month'
					className='form-control'
					value={onThe.month}
					disabled={!isActive}
					onChange={onChangeMonth}
				>
					{Object.entries(MONTHS).map(([key, month]) => (
						<option key={key} value={key}>
							{month}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default OnThe;
