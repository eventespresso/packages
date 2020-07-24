import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';
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
		<div className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
			<div className='col-sm-1 offset-sm-2'>
				{!isTheOnlyMode && (
					<input
						id={id}
						type='radio'
						name={id}
						aria-label={__('Repeat yearly on')}
						value='ON'
						checked={isActive}
						onChange={onChangeMode}
					/>
				)}
			</div>

			<div className='col-sm-1'>{__('on')}</div>

			<div className='col-sm-2'>
				<select
					id={`${id}-month`}
					name='repeat.yearly.on.month'
					aria-label={__('Repeat yearly on month')}
					className='form-control'
					value={on.month}
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

			<div className='col-sm-2'>
				<select
					id={`${id}-day`}
					name='repeat.yearly.on.day'
					aria-label={__('Repeat yearly on a day')}
					className='form-control'
					value={on.day}
					disabled={!isActive}
					onChange={onChangeDay}
				>
					{range(1, daysInMonth + 1).map((day) => (
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
