import { NOW } from '@eventespresso/constants';
import { setTimeToZeroHour } from '../..';
import isOnOrAfterToday from '../isOnOrAfterToday';

// lets set the time to today midnight
const todayAtZeroHour = setTimeToZeroHour(NOW);

describe('isOnOrAfterToday', () => {
	it('returns true if the given date is today', () => {
		const result = isOnOrAfterToday(NOW);
		expect(result).toBe(true);
	});

	it('returns true if the given date is after today', () => {
		// Hoping for GitHub Arctic Code Vault to preserve this till that day to fail this test
		const result = isOnOrAfterToday(new Date(2199, 1 /* Feb */, 11));
		expect(result).toBe(true);
	});

	it('returns true if the date is after today when considerTime is false', () => {
		// if we are past 11 pm, adding 1 hour will shift the date to the next day
		const expected = NOW.getHours() >= 23;

		// this test won't fail at midnight, so sleep well
		const result = isOnOrAfterToday(todayAtZeroHour, false);
		expect(result).toBe(expected);
	});

	it('returns false if the date is before today when considerTime is true', () => {
		// this test won't fail at midnight, so sleep well
		const result = isOnOrAfterToday(todayAtZeroHour, true);
		expect(result).toBe(false);
	});

	it('returns false if the date is before today', () => {
		const result = isOnOrAfterToday(new Date(1987, 1 /* Feb */, 11));
		expect(result).toBe(false);
	});

	it('returns false if the date is invalid', () => {
		const result = isOnOrAfterToday(new Date(NaN));
		expect(result).toBe(false);
	});

	it('returns false if the date is null or undefined', () => {
		[null, undefined].forEach((date) => {
			expect(isOnOrAfterToday(date)).toBe(false);
		});
	});
});
