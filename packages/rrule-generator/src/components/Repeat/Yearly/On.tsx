import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';
import { parse, getDaysInMonth } from 'date-fns';
import { range } from 'ramda';

import { MONTHS } from '../../../constants';
import { useRRuleState } from '../../../hooks';
import { OnChangeSelect } from '../../types';
import { Month } from '../../../types';
import { OnProps } from '../types';

const On: React.FC<OnProps> = ({ id, isTheOnlyMode, onChangeMode }) => {
	const {
		repeat: { yearly },
		setRepeatMonth,
		setRepeatDay,
	} = useRRuleState();

	const isActive = yearly?.mode === 'ON';
	const on = yearly?.on;
	// parse 'Jan', 'Feb'
	const date = parse(on?.month, 'MMM', new Date());
	// number of days in the selected month
	const daysInMonth = getDaysInMonth(date);

	const onChangeMonth = useCallback<OnChangeSelect>(
		(event) => {
			const value = event.target.value as Month;
			setRepeatMonth('on', value);
		},
		[setRepeatMonth]
	);

	const onChangeDay = useCallback<OnChangeSelect>(
		(event) => {
			const value = +event.target.value;
			setRepeatDay('yearly', 'on', value);
		},
		[setRepeatDay]
	);

	return (
		<div className='rrule-generator__on'>
			{!isTheOnlyMode && (
				<label className='rrule-generator__labelled-input'>
					<input
						aria-label={__('Repeat yearly on')}
						checked={isActive}
						className='rrule-generator__input-radio'
						id={id}
						type='radio'
						name={id}
						value='ON'
						onChange={onChangeMode}
					/>
					<span>{__('on')}</span>
				</label>
			)}

			<select
				id={`${id}-month`}
				name={`${id}-month`}
				aria-label={__('Repeat yearly on month')}
				className='rrule-generator__form-control rrule-generator__select rrule-generator__month'
				value={on.month}
				disabled={!isActive}
				onBlur={onChangeMonth}
				onChange={onChangeMonth}
			>
				{Object.entries(MONTHS).map(([key, month]) => (
					<option key={key} value={key}>
						{month}
					</option>
				))}
			</select>

			<select
				id={`${id}-day`}
				name={`${id}-day`}
				aria-label={__('Repeat yearly on a day')}
				className='rrule-generator__form-control rrule-generator__select rrule-generator__day'
				value={on.day}
				disabled={!isActive}
				onBlur={onChangeDay}
				onChange={onChangeDay}
			>
				{range(1, daysInMonth + 1).map((day) => (
					<option key={day} value={day}>
						{day}
					</option>
				))}
			</select>
		</div>
	);
};

export default On;
