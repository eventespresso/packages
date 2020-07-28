import { RRule, RRuleSet } from 'rrule';
import { isEmpty } from 'ramda';

import { useFormState } from '../../data';
import { getRecurrenceFrequency } from '../../utils';

export const useGenerateDatetimes = (): Date[] => {
	const { getData } = useFormState();

	const { exRule, rRule, exDates, rDates } = getData();

	if (!rRule) {
		return [];
	}

	// const ruleString = 'DTSTART=20181101T120000Z;FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR;COUNT=4;WKST=SU';
	// const rrule = RRule.fromString( ruleString );
	// console.log( 'rrule.toString()', rrule.toString() );
	// console.log( rrule.all() );
	const rruleSet = new RRuleSet();

	rruleSet.rrule(RRule.fromString(rRule));

	if (exRule) {
		console.log('generateDatetimes() exRule', exRule);
		rruleSet.exrule(RRule.fromString(exRule));
	}

	if (Array.isArray(rDates) && !isEmpty(rDates)) {
		console.log('generateDatetimes() rDates', rDates);

		rDates.forEach((rDate: Date) => {
			if (rDate instanceof Date) {
				console.log('generateDatetimes() rDate', rDate);
				rruleSet.rdate(rDate);
			}
		});
	}

	if (Array.isArray(exDates) && !isEmpty(exDates)) {
		console.log('generateDatetimes() exDates', exDates);

		exDates.forEach((exDate) => {
			if (exDate instanceof Date) {
				console.log('generateDatetimes() exDate', exDate);
				rruleSet.exdate(exDate);
			}
		});
	}

	let dateCount = 183; // ~6 months of events if repeated DAILY

	switch (getRecurrenceFrequency(rRule)) {
		case 'YEARLY':
			dateCount = 5; // 5 years if repeated YEARLY
			break;
		case 'MONTHLY':
			dateCount = 36; // 3 years if repeated MONTHLY
			break;
		case 'WEEKLY':
			dateCount = 104; // 2 years if repeated WEEKLY
			break;
	}

	return (
		rruleSet.all((date, i) => {
			return i < dateCount;
		}) || []
	);
};

export default useGenerateDatetimes;
