import { RRule, RRuleSet } from 'rrule';
import { identity, map, sortBy } from 'ramda';
import { formatISO, parseISO } from 'date-fns';

import { useFormState } from '../../data';
import getDatesLimit from '../../utils/getDatesLimit';
import { useMemoStringify } from '@eventespresso/hooks';

export const useGenerateDatetimes = (includeExDates?: boolean): Array<string> => {
	const { exRule, rRule, exDates, rDates } = useFormState();

	let result = [];

	if (rRule) {
		const rruleSet = new RRuleSet();

		rruleSet.rrule(RRule.fromString(rRule));

		if (exRule) {
			console.log('generateDatetimes() exRule', exRule);
			rruleSet.exrule(RRule.fromString(exRule));
		}

		rDates.forEach((rDate) => {
			console.log('generateDatetimes() rDate', rDate);
			rruleSet.rdate(parseISO(rDate));
		});

		exDates.forEach((exDate) => {
			console.log('generateDatetimes() exDate', exDate);
			rruleSet.exdate(parseISO(exDate));
		});

		const datesLimit = getDatesLimit(rRule);

		const generatedDates = rruleSet.all((date, i) => {
			return i < datesLimit;
		});

		let generatedDatesISOStr = map(formatISO, generatedDates);

		if (includeExDates) {
			generatedDatesISOStr = [...generatedDatesISOStr, ...exDates];
		}

		result = sortBy(identity, generatedDatesISOStr);
	}

	return useMemoStringify(result);
};

export default useGenerateDatetimes;
