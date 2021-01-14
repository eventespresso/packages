import type { DateRange } from '../../types';

import { rangeFormat } from './';

const formatTokens = {
	day: 'd',
	daySeparator: '-',
};

describe('rangeFormat', () => {
	it('returns formated range between multiple days', () => {
		const range: DateRange = [new Date(2014, 1, 11), new Date(2014, 1, 12)];
		const result = rangeFormat({ formatTokens, range });
		expect(result).toBe('February 11-12 2014');
	});

	it('returns formated range between multiple months', () => {
		const range: DateRange = [new Date(2014, 1, 11), new Date(2014, 2, 11)];
		const result = rangeFormat({ formatTokens, range });
		expect(result).toBe('February 11 - March 11 2014');
	});

	it('returns formated range between multiple years', () => {
		const range: DateRange = [new Date(2014, 1, 11), new Date(2015, 1, 11)];
		const result = rangeFormat({ formatTokens, range });
		expect(result).toBe('February 11 2014 - February 11 2015');
	});

	describe('with showTime enabled', () => {
		it('returns formated range for the same day, but different hours', () => {
			const range: DateRange = [new Date(2014, 1, 11, 1), new Date(2014, 1, 11, 2)];
			const result = rangeFormat({ formatTokens, range, showTime: true });
			expect(result).toBe('February 11 2014 1:00 a.m. - 2:00 a.m.');
		});

		it('returns formated range between multiple days', () => {
			const range: DateRange = [new Date('December 17, 1995 03:24:00'), new Date('December 18, 1995 03:25:00')];
			const result = rangeFormat({ formatTokens, range, showTime: true });
			expect(result).toBe('December 17-18 1995 3:24 a.m. - 3:25 a.m.');
		});

		it('returns formated range between multiple months', () => {
			const range: DateRange = [new Date(2014, 1, 11, 1), new Date(2014, 2, 12, 2)];
			const result = rangeFormat({ formatTokens, range, showTime: true });
			expect(result).toBe('February 11 - March 12 2014 1:00 a.m. - 2:00 a.m.');
		});

		it('returns formated range between multiple years', () => {
			const range: DateRange = [new Date(2013, 1, 11, 1), new Date(2014, 2, 12, 2)];
			const result = rangeFormat({ formatTokens, range, showTime: true });
			expect(result).toBe('February 11 2013 - March 12 2014 1:00 a.m. - 2:00 a.m.');
		});
	});
});
