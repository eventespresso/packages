import React from 'react';

import EndAfter from './After';
import OnDate from './OnDate';

import Mode from './Mode';
import { useRRuleState } from '../../hooks';
import { BaseProps } from '../types';

const End: React.FC<BaseProps> = ({ id }) => {
	const { end, setEndMode, setEndAfter, setEndDate } = useRRuleState();

	return (
		<div className='px-3'>
			<div className='form-group row'>
				<Mode id={`${id}-mode`} mode={end.mode} onChange={setEndMode} />

				{end.mode === 'AFTER' && <EndAfter id={`${id}-after`} after={end.after} onChange={setEndAfter} />}

				{end.mode === 'ON_DATE' && <OnDate id={`${id}-date`} date={end.date} onChange={setEndDate} />}
			</div>
		</div>
	);
};

export default End;
