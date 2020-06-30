import React from 'react';
// import { isEmpty, isArray } from 'lodash';
import { __ } from '@wordpress/i18n';
// import moment from 'moment';
import { RRule, RRuleSet } from 'rrule';

import RRulePatternEditor from './RRulePatternEditor';
import ExtraDatetimes from './ExtraDatetimes';
import GeneratedDatetimes from './GeneratedDatetimes';
// import { DATA_STORE_KEY_REM } from '../data-stores';
import { PATTERN_TYPE_RECURRENCE, PATTERN_TYPE_EXCLUSION } from '../../constants';

import { generateDatetimes, getRecurrenceFrequency } from '../../utils';

import './style.scss';

const EditDatetimeRecurrence = ({
	editorOpen,
	eventDate,
	toggleEditor,
	rRule,
	exRule,
	rDates,
	exDates,
	onExclusionChange,
	addRdate,
	deleteRdate,
	addExDate,
	deleteExDate,
}) => {
	const onRecurrenceChange = (rRuleString) => {
		rRuleString = rRuleString.target ? rRuleString.target.value : rRuleString;
		return rRuleString ? addRrule(eventDate, rRuleString) : resetRrule(eventDate);
	};

	return (
		<>
			<RRulePatternEditor
				id={eventDate.id}
				type={PATTERN_TYPE_RECURRENCE}
				rruleString={rRule}
				onChange={onRecurrenceChange}
				initialOpen={true}
			/>
			<RRulePatternEditor
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
			<GeneratedDatetimes
				id={eventDate.id}
				datetimes={datetimes}
				freq={getRecurrenceFrequency(rRule)}
				onClick={addExDate}
			/>
		</>
	);
};

export default EditDatetimeRecurrence;

// export default compose(
// 	withSelect((select, ownProps) => {
// 		const { getRRule, getExRule, getRDates, getExDates } = select(DATA_STORE_KEY_REM);
// 		const { eventDate } = ownProps;
// 		// console.log( 'EditDatetimeRecurrence withSelect() ownProps', ownProps );
// 		return eventDate.hasOwnProperty('id')
// 			? {
// 					rRule: getRRule(eventDate),
// 					exRule: getExRule(eventDate),
// 					rDates: getRDates(eventDate),
// 					exDates: getExDates(eventDate),
// 			  }
// 			: {};
// 	}),
// 	withDispatch((dispatch, ownProps) => {
// 		const {
// 			addRrule,
// 			resetRrule,
// 			addExRule,
// 			resetExRule,
// 			addRdate,
// 			deleteRdate,
// 			addExDate,
// 			deleteExDate,
// 		} = dispatch(DATA_STORE_KEY_REM);
// 		const { eventDate } = ownProps;
// 		// console.log( 'EditDatetimeRecurrence withDispatch() ownProps', ownProps );
// 		return {

// 			onExclusionChange(exRuleString) {
// 				exRuleString = exRuleString.target ? exRuleString.target.value : exRuleString;
// 				return exRuleString ? addExRule(eventDate, exRuleString) : resetExRule(eventDate);
// 			},
// 			addRdate(rDate) {
// 				return addRdate(eventDate, rDate);
// 			},
// 			deleteRdate(rDate) {
// 				return deleteRdate(eventDate, rDate);
// 			},
// 			addExDate(exDate) {
// 				return addExDate(eventDate, exDate);
// 			},
// 			deleteExDate(exDate) {
// 				return deleteExDate(eventDate, exDate);
// 			},
// 		};
// 	})
// )(EditDatetimeRecurrence);
