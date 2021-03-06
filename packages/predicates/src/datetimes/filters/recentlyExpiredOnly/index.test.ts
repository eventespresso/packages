import { formatISO } from 'date-fns';

import { NOW } from '@eventespresso/constants';
import { nodes as datetimes } from '@eventespresso/edtr-services/src/apollo/queries/datetimes/test/data';
import { sub } from '@eventespresso/dates';
import recentlyExpiredOnly from './index';

const datetime = datetimes[0];

describe('recentlyExpiredOnly', () => {
	it('Should return empty array if dates are not recently being expired', () => {
		const filteredDates = recentlyExpiredOnly([
			{ ...datetime, id: 'abc', endDate: '2009-12-18T11:31:00+00:00' },
			{ ...datetime, id: 'def', endDate: '2000-12-18T11:31:00+00:00' },
		]);

		expect(filteredDates).toEqual([]);
	});

	it('Should return an array of recentlyExpiredOnly dates', () => {
		const filteredDates = recentlyExpiredOnly([
			{ ...datetime, id: 'abc', endDate: formatISO(sub('weeks', NOW, 3)) },
			{ ...datetime, id: 'def', endDate: formatISO(sub('weeks', NOW, 4)) },
			{ ...datetime, id: 'xyz', endDate: formatISO(sub('weeks', NOW, 5)) },
		]);

		expect(filteredDates.length).toBe(2);
		expect(filteredDates[0].id).toBe('abc');
		expect(filteredDates[1].id).toBe('def');
	});
});
