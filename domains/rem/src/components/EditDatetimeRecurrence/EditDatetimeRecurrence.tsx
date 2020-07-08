import React from 'react';
// import { __ } from '@wordpress/i18n';
// import moment from 'moment';
// import { RRule, RRuleSet, rrulestr } from 'rrule';

import type { Datetime } from '@eventespresso/edtr-services';

import RRulePatternEditor from '../RRulePatternEditor';
// import ExtraDatetimes from './ExtraDatetimes';
// import Datetimes from './Datetimes';
// import { DATA_STORE_KEY_REM } from '../data-stores';
import { PATTERN_TYPE_RECURRENCE } from '../../constants';

// import { generateDatetimes, getRecurrenceFrequency } from '../../utils';

import './style.scss';

interface Props {
	datetime: Datetime;
}

const EditDatetimeRecurrence: React.FC<Props> = ({ datetime }) => {
	const onRecurrenceChange = (rRuleString: string): string => {
		// rRuleString = rRuleString.target ? rRuleString.target.value : rRuleString;
		// return rRuleString ? addRrule(eventDate, rRuleString) : resetRrule(eventDate);
		return rRuleString;
	};

	const ruleString = 'DTSTART:20120201T093000Z\nRRULE:FREQ=WEEKLY;INTERVAL=5;UNTIL=20130130T230000Z;BYDAY=MO,FR';

	return (
		<>
			<RRulePatternEditor
				id={datetime.id}
				type={PATTERN_TYPE_RECURRENCE}
				rruleString={ruleString}
				onChange={onRecurrenceChange}
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

export default EditDatetimeRecurrence;
