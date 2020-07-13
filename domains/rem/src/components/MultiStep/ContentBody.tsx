import React from 'react';

import Steps from './Steps';

import type { ContentBodyProps } from './types';
import { useDatetime, useStepsState } from '../../context';
import { ExclusionPattern, RecurrencePattern } from '../recurrence';
import { DatetimeDetails } from '../datetimeDetails';
import { GeneratedDates } from '../generatedDates';
import Tickets from '../Tickets';

const ContentBody: React.FC<ContentBodyProps> = () => {
	const { current } = useStepsState();
	const datetime = useDatetime();

	return (
		<div>
			<Steps current={current} />
			{current === 0 && <RecurrencePattern />}
			{current === 1 && <ExclusionPattern />}
			{current === 2 && <DatetimeDetails datetime={datetime} />}
			{current === 3 && <Tickets />}
			{current === 4 && <GeneratedDates />}
		</div>
	);
};

export default ContentBody;
