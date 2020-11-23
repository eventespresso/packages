import { NOW } from '@eventespresso/constants';
import isOnOrAfterDate from '../isOnOrAfterDate';

describe('isOnOrAfterDate', () => {
	it('returns true if the given dates are equal', () => {
		const result = isOnOrAfterDate(new Date(1987, 1 /* Feb */, 11), new Date(1987, 1 /* Feb */, 11));
		expect(result).toBe(true);
	});

	it('returns true if the first date is before second date when considerTime is false', () => {
		const result = isOnOrAfterDate(
			new Date(1987, 1 /* Feb */, 11, 9, 14),
			new Date(1987, 1 /* Feb */, 11, 10, 15),
			false
		);
		expect(result).toBe(true);
	});

	it('returns false if the first date is before second date when considerTime is true', () => {
		const result = isOnOrAfterDate(
			new Date(1987, 1 /* Feb */, 11, 10, 16),
			new Date(1987, 1 /* Feb */, 11, 10, 15),
			true
		);
		expect(result).toBe(true);
	});

	it('returns true if the first date is after second date', () => {
		const result = isOnOrAfterDate(new Date(1987, 1 /* Feb */, 12, 10, 15), new Date(1987, 1 /* Feb */, 11, 9, 12));
		expect(result).toBe(true);
	});

	it('returns false if the first date is before second date', () => {
		const result = isOnOrAfterDate(new Date(1986, 6 /* Jul */, 10), new Date(1987, 1 /* Feb */, 11));
		expect(result).toBe(false);
	});

	it('returns false if the first date is invalid', () => {
		const result = isOnOrAfterDate(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
		expect(result).toBe(false);
	});

	it('returns false if the second date is invalid', () => {
		const result = isOnOrAfterDate(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
		expect(result).toBe(false);
	});

	it('returns false if the both dates are invalid', () => {
		const result = isOnOrAfterDate(new Date(NaN), new Date(NaN));
		expect(result).toBe(false);
	});

	it('returns false if any of the two or both are null or undefined', () => {
		[null, undefined].forEach((date) => {
			expect(isOnOrAfterDate(NOW, date)).toBe(false);
			expect(isOnOrAfterDate(date, NOW)).toBe(false);
			expect(isOnOrAfterDate(date, date)).toBe(false);
		});
	});
});
