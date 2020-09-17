import React from 'react';
import { __ } from '@eventespresso/i18n';

import EndAfter from './After';
import OnDate from './OnDate';

import Mode from './Mode';
import { useRRuleState } from '../../hooks';
import { BaseProps } from '../types';

import '../styles.scss';

const End: React.FC<BaseProps> = (props) => {
	const { end, setEndMode, setEndAfter, setEndDate } = useRRuleState();
	const id = `${props.id}-mode`;

	return (
		<div className='rrule-generator__form-group-row'>
			<label htmlFor={id} className='col-form-label'>
				<strong>{__('End')}</strong>
			</label>

			<Mode id={id} mode={end.mode} onChange={setEndMode} />

			{end.mode === 'AFTER' && <EndAfter id={`${id}-after`} after={end.after} onChange={setEndAfter} />}

			{end.mode === 'ON_DATE' && <OnDate id={`${id}-date`} date={end.date} onChange={setEndDate} />}
		</div>
	);
};

export default End;
