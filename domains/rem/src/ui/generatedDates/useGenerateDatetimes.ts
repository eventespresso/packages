import { RRule, RRuleSet } from 'rrule';
import { formatISO, parseISO } from 'date-fns';

import { useMemoStringify } from '@eventespresso/hooks';
import { useFormState } from '../../data';
import getDatesLimit from '../../utils/getDatesLimit';
import { GeneratedDate } from './types';
import { sortBy, prop } from 'ramda';

export const useGenerateDatetimes = (includeExDates?: boolean): Array<GeneratedDate> => {
	const { exRule, rRule, exDates, rDates } = useFormState();

	let result: Array<GeneratedDate> = [];

	if (rRule) {
		const rruleSet = new RRuleSet();

		rruleSet.rrule(RRule.fromString(rRule));

		if (exRule) {
			rruleSet.exrule(RRule.fromString(exRule));
		}

		rDates.forEach((rDate) => {
			rruleSet.rdate(parseISO(rDate));
		});

		exDates.forEach((exDate) => {
			rruleSet.exdate(parseISO(exDate));
		});

		const datesLimit = getDatesLimit(rRule);

		const rruleGeneratedDates = rruleSet.all((date, i) => {
			return i < datesLimit;
		});

		let generatedDates: Array<GeneratedDate> = rruleGeneratedDates.map<GeneratedDate>((date) => {
			const ISOStr = formatISO(date);
			const type = rDates.includes(ISOStr) ? 'rDate' : 'gDate';

			return { date, ISOStr, type };
		});

		if (includeExDates) {
			const excludedDates: Array<GeneratedDate> = exDates.map<GeneratedDate>((dateStr) => {
				const date = parseISO(dateStr);
				const type = 'exDate';

				return { date, ISOStr: dateStr, type };
			});
			generatedDates = [...generatedDates, ...excludedDates];
		}

		result = sortBy(prop('ISOStr'), generatedDates);
	}

	return useMemoStringify(result);
};

export default useGenerateDatetimes;
