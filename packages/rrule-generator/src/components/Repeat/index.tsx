import React from 'react';

import RepeatYearly from './Yearly';
// import RepeatMonthly from './Monthly/index';
// import RepeatWeekly from './Weekly/index';
// import RepeatDaily from './Daily/index';
// import RepeatHourly from './Hourly/index';
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

			{frequency === 'YEARLY' && <RepeatYearly id={`${id}-yearly`} />}
			{/* {isOptionSelected('Monthly') && (
				<RepeatMonthly
					id={`${id}-monthly`}
					monthly={monthly}
					handleChange={handleChange}
					translations={translations}
				/>
			)}
			{isOptionSelected('Weekly') && (
				<RepeatWeekly
					id={`${id}-weekly`}
					weekly={weekly}
					handleChange={handleChange}
					translations={translations}
				/>
			)}
			{isOptionSelected('Daily') && (
				<RepeatDaily id={`${id}-daily`} daily={daily} handleChange={handleChange} translations={translations} />
			)}
			{isOptionSelected('Hourly') && (
				<RepeatHourly
					id={`${id}-hourly`}
					hourly={hourly}
					handleChange={handleChange}
					translations={translations}
				/>
			)} */}
		</div>
	);
};
export default Repeat;
