import React from 'react';

import { PatternEditor } from '../recurrence';
import { DatetimeDetails } from '../datetimeDetails';
import { GeneratedDates } from '../generatedDates';
import Steps from './Steps';
import Tickets from '../Tickets';
import { useStepsState } from '../../context';

const ContentBody: React.FC = () => {
	const { current } = useStepsState();

	return (
		<div>
			<Steps current={current} />
			{current === 0 && <PatternEditor />}
			{current === 1 && <DatetimeDetails />}
			{current === 2 && <Tickets />}
			{current === 3 && <GeneratedDates />}
		</div>
	);
};

export default ContentBody;
