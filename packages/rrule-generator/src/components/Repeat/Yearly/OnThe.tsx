import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { Radio } from '../../../../../adapters';
import { Select } from '../../../../../components';
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
					<Radio
						aria-label={__('Repeat yearly on the')}
						className='rrule-generator__input-radio'
						id={id}
						isChecked={isActive}
						name={id}
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
				onChangeWhich={onChangeWhich}
				value={onThe.which}
			/>

			<Select
				id={`${id}-day`}
				name={`${id}-day`}
				aria-label={__('Repeat yearly on the day')}
				className='rrule-generator__form-control rrule-generator__select'
				value={onThe.day}
				isDisabled={!isActive}
				onBlur={onChangeDay}
				onChange={onChangeDay}
			>
				{Object.entries(DAYS).map(([key, day]) => (
					<option key={key} value={key}>
						{day}
					</option>
				))}
			</Select>

			<span>{__('of')}</span>

			<Select
				id={`${id}-month`}
				name={`${id}-month`}
				aria-label={__('Repeat yearly on the month')}
				className='rrule-generator__form-control rrule-generator__select rrule-generator__month'
				value={onThe.month}
				isDisabled={!isActive}
				onBlur={onChangeMonth}
				onChange={onChangeMonth}
			>
				{Object.entries(MONTHS).map(([key, month]) => (
					<option key={key} value={key}>
						{month}
					</option>
				))}
			</Select>
		</div>
	);
};

export default OnThe;
