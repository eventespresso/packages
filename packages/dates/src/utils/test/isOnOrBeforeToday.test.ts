import isOnOrBeforeToday from '../isOnOrBeforeToday';
import { add } from '../addSub';
import { NOW } from '../../constants';

// lets set the time to one hour from now
const oneHourFromNow = add('hours', new Date(), 1);

describe('isOnOrBeforeToday', () => {
	it('returns true if the given date is today', () => {
		const result = isOnOrBeforeToday(NOW);
		expect(result).toBe(true);
	});

	it('returns true if the given date is before today', () => {
		const result = isOnOrBeforeToday(new Date(2019, 1 /* Feb */, 11));
		expect(result).toBe(true);
	});

	it('returns true if the date is before today when considerTime is false', () => {
		const result = isOnOrBeforeToday(oneHourFromNow, false);
		expect(result).toBe(true);
	});

	it('returns false if the first date is before second date when considerTime is true', () => {
		const result = isOnOrBeforeToday(oneHourFromNow, true);
		expect(result).toBe(false);
	});

	it('returns false if the date is after today', () => {
		// Hoping for GitHub Arctic Code Vault to preserve this till that day to fail this test
		const result = isOnOrBeforeToday(new Date(2199, 1 /* Feb */, 11));
		expect(result).toBe(false);
	});

	it('returns false if the date is invalid', () => {
		const result = isOnOrBeforeToday(new Date(NaN));
		expect(result).toBe(false);
	});

	it('returns false if the date is null or undefined', () => {
		[null, undefined].forEach((date) => {
			expect(isOnOrBeforeToday(date)).toBe(false);
		});
	});
});
