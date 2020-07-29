import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { MONTHS, DAYS } from '../../../constants';
import { useRRuleState } from '../../../hooks';
import { OnChangeSelect } from '../../types';
import { Which, Month, Day } from '../../../types';
import { OnProps } from '../types';

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
		<div className='rrule-generator__on-the'>
			{!isTheOnlyMode && (
				<input
					id={id}
					type='radio'
					aria-label={__('Repeat yearly on the')}
					name='repeat.yearly.mode'
					checked={isActive}
					value='ON_THE'
					onChange={onChangeMode}
				/>
			)}

			<div>{__('on the')}</div>

			<select
				id={`${id}-which`}
				name='repeat.yearly.onThe.which'
				aria-label={__('Repeat yearly on the')}
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
				name='repeat.yearly.onThe.day'
				aria-label={__('Repeat yearly on the day')}
				className='rrule-generator__form-control'
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

			<div>{__('of')}</div>

			<select
				id={`${id}-month`}
				name='repeat.yearly.onThe.month'
				aria-label={__('Repeat yearly on the month')}
				className='rrule-generator__form-control'
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
	);
};

export default OnThe;
