import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import PositionSelect from '../PositionSelect';
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
			setRepeatWhich('yearly', value);
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
				<label className='rrule-generator__labelled-input'>
					<input
						aria-label={__('Repeat yearly on the')}
						className='rrule-generator__input-radio'
						id={id}
						type='radio'
						name='repeat.yearly.mode'
						checked={isActive}
						value='ON_THE'
						onChange={onChangeMode}
					/>
					<span>{__('on the')}</span>
				</label>
			)}

			<PositionSelect
				aria-label={__('Repeat yearly on the')}
				id={id}
				isActive={isActive}
				name='repeat.yearly.onThe.which'
				onChangeWhich={onChangeWhich}
				value={onThe.which}
			/>

			<select
				id={`${id}-day`}
				name='repeat.yearly.onThe.day'
				aria-label={__('Repeat yearly on the day')}
				className='rrule-generator__form-control rrule-generator__select'
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

			<span>{__('of')}</span>

			<select
				id={`${id}-month`}
				name='repeat.yearly.onThe.month'
				aria-label={__('Repeat yearly on the month')}
				className='rrule-generator__form-control rrule-generator__select rrule-generator__month'
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
