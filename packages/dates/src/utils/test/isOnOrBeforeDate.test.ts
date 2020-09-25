import isOnOrBeforeDate from '../isOnOrBeforeDate';

describe('isOnOrBeforeDate', () => {
	it('returns true if the given dates are equal', () => {
		const result = isOnOrBeforeDate(new Date(1987, 1 /* Feb */, 11), new Date(1987, 1 /* Feb */, 11));
		expect(result).toBe(true);
	});

	it('returns false if the first date is before second date when considerTime is false', () => {
		const result = isOnOrBeforeDate(
			new Date(1987, 1 /* Feb */, 11, 9, 14),
			new Date(1987, 1 /* Feb */, 11, 10, 15),
			false
		);
		expect(result).toBe(true);
	});

	it('returns true if the first date is before second date when considerTime is true', () => {
		const result = isOnOrBeforeDate(
			new Date(1987, 1 /* Feb */, 11, 9, 14),
			new Date(1987, 1 /* Feb */, 11, 10, 15),
			true
		);
		expect(result).toBe(true);
	});

	it('returns true if the first date is before second date', () => {
		const result = isOnOrBeforeDate(
			new Date(1987, 1 /* Feb */, 11, 9, 12),
			new Date(1987, 1 /* Feb */, 12, 10, 15)
		);
		expect(result).toBe(true);
	});

	it('returns false if the first date is after second date', () => {
		const result = isOnOrBeforeDate(
			new Date(1987, 1 /* Feb */, 11, 10, 45),
			new Date(1986, 6 /* Jul */, 10, 9, 52)
		);
		expect(result).toBe(false);
	});

	it('returns false if the first date is invalid', () => {
		const result = isOnOrBeforeDate(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
		expect(result).toBe(false);
	});

	it('returns false if the second date is invalid', () => {
		const result = isOnOrBeforeDate(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
		expect(result).toBe(false);
	});

	it('returns false if the both dates are invalid', () => {
		const result = isOnOrBeforeDate(new Date(NaN), new Date(NaN));
		expect(result).toBe(false);
	});

	it('returns false if any of the two is null or undefined', () => {
		[null, undefined].forEach((date) => {
			expect(isOnOrBeforeDate(new Date(), date)).toBe(false);
			expect(isOnOrBeforeDate(date, new Date())).toBe(false);
			expect(isOnOrBeforeDate(date, date)).toBe(false);
		});
	});
});
