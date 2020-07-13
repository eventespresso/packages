import React from 'react';

import RRulePatternEditor from '../RRulePatternEditor';
// import ExtraDatetimes from './ExtraDatetimes';
// import Datetimes from './Datetimes';
// import { DATA_STORE_KEY_REM } from '../data-stores';
import { PATTERN_TYPE_RECURRENCE } from '../../constants';

// import { generateDatetimes, getRecurrenceFrequency } from '../../utils';

import { useDatetime } from '../../context';
import { useFormState } from '../../services/data';

import './style.scss';

const EditRecurrence: React.FC = () => {
	const datetime = useDatetime();
	const { rRule, setRRule } = useFormState();

	return (
		<>
			<RRulePatternEditor
				id={datetime.id}
				type={PATTERN_TYPE_RECURRENCE}
				rruleString={rRule}
				onChange={setRRule}
				initialOpen={true}
			/>
			{/* <RRulePatternEditor
				id={eventDate.id}
				type={PATTERN_TYPE_EXCLUSION}
				rruleString={exRule}
				onChange={onExclusionChange}
			/>
			<ExtraDatetimes
				id={eventDate.id}
				type={PATTERN_TYPE_RECURRENCE}
				datetimes={rDates}
				addDatetime={addRdate}
				deleteDatetime={deleteRdate}
			/>
			<ExtraDatetimes
				id={eventDate.id}
				type={PATTERN_TYPE_EXCLUSION}
				datetimes={exDates}
				addDatetime={addExDate}
				deleteDatetime={deleteExDate}
			/>
			<Datetimes
				id={eventDate.id}
				datetimes={datetimes}
				freq={getRecurrenceFrequency(rRule)}
				onClick={addExDate}
			/> */}
		</>
	);
};

export default EditRecurrence;
