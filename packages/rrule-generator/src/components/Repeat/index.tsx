import React from 'react';

import Yearly from './Yearly';
import Monthly from './Monthly';
import Weekly from './Weekly';
import Daily from './Daily';
import Hourly from './Hourly';
import { BaseProps } from '../types';
import Frequency from './Frequency';
import { useRRuleState } from '../../hooks';

const Repeat: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { frequency },
		setRepeatFrequency,
	} = useRRuleState();

	return (
		<div className='px-3'>
			<Frequency id={`${id}-frequency`} onChange={setRepeatFrequency} frequency={frequency} />

			{frequency === 'YEARLY' && <Yearly id={`${id}-yearly`} />}
			{frequency === 'MONTHLY' && <Monthly id={`${id}-monthly`} />}
			{frequency === 'WEEKLY' && <Weekly id={`${id}-weekly`} />}
			{frequency === 'DAILY' && <Daily id={`${id}-daily`} />}
			{frequency === 'HOURLY' && <Hourly id={`${id}-hourly`} />}
		</div>
	);
};
export default Repeat;
