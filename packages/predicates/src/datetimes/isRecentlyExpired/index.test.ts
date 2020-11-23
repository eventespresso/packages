import { formatISO } from 'date-fns';

import { nodes as datetimes } from '@eventespresso/edtr-services/src/apollo/queries/datetimes/test/data';
import { add, sub } from '@eventespresso/dates';
import { NOW } from '@eventespresso/constants';
import isRecentlyExpired from './index';

describe('isRecentlyExpired', () => {
	it('should return false if endDate is in the future', () => {
		datetimes.forEach((datetime) => {
			const newDatetime: any = { ...datetime, endDate: formatISO(add('weeks', NOW, 1)) };
			const result = isRecentlyExpired(newDatetime);
			expect(result).toBe(false);
		});
	});

	it('should return false if endDate is more than a month ago', () => {
		datetimes.forEach((datetime) => {
			const newDatetime: any = { ...datetime, endDate: formatISO(sub('days', NOW, 31)) };
			const result = isRecentlyExpired(newDatetime);
			expect(result).toBe(false);
		});

		datetimes.forEach((datetime) => {
			const newDatetime: any = { ...datetime, endDate: formatISO(sub('weeks', NOW, 5)) };
			const result = isRecentlyExpired(newDatetime);
			expect(result).toBe(false);
		});
	});

	it('should return true if endDate is in the range of a month ago', () => {
		datetimes.forEach((datetime) => {
			const newDatetime: any = { ...datetime, endDate: formatISO(sub('weeks', NOW, 3)) };
			const result = isRecentlyExpired(newDatetime);
			expect(result).toBe(true);
		});
	});
});
