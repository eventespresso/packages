import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Divider, Select } from '@eventespresso/ui-components';

import { DAYS } from '../../../constants';
import PositionSelect from '../PositionSelect';
import { OnProps } from '../types';
import { useRRuleState } from '../../../hooks';
import { OnChangeSelect } from '../../types';
import { Which, Day } from '../../../types';

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
			setRepeatWhich('monthly', value);
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
						aria-label={__('Repeat monthly on the')}
						checked={isActive}
						className='rrule-generator__input-radio'
						id={id}
						type='radio'
						name={id}
						value='ON_THE'
						onChange={onChangeMode}
					/>
					<span>{__('on the')}</span>
				</label>
			)}

			<PositionSelect
				aria-label={__('Repeat monthly on the which')}
				id={id}
				isActive={isActive}
				onChangeWhich={onChangeWhich}
				value={onThe.which}
			/>

			<Divider orientation='vertical' size='micro' />

			<Select
				id={`${id}-day`}
				name={`${id}-day`}
				aria-label={__('Repeat monthly on the day')}
				className=' rrule-generator__select rrule-generator__month'
				value={onThe.day}
				isDisabled={!isActive}
				onBlur={onChangeDay}
				onChange={onChangeDay}
				width='auto'
			>
				{Object.entries(DAYS).map(([key, day]) => (
					<option key={key} value={key}>
						{day}
					</option>
				))}
			</Select>
		</div>
	);
};

export default OnThe;
