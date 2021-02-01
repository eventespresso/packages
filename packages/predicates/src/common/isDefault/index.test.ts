import { isDefault, isNotDefault } from './';
import { nodes as tickets } from '@eventespresso/edtr-services/src/apollo/queries/tickets/test/data';

describe('isDefault', () => {
	it(`should return false if isDefault prop is boolean and it's value is false`, () => {
		tickets.forEach((ticket) => {
			const newTicket = { ...ticket, isDefault: false };
			const result = isDefault(newTicket);
			expect(result).toBe(false);
		});
	});

	it(`should return false if isDefault value is null or undefined`, () => {
		[null, undefined].forEach((value) => {
			const object = { isDefault: value };
			const result = isDefault(object);
			expect(result).toBe(false);
		});
	});

	it(`should return true if isDefault prop is boolean and it's value is true`, () => {
		tickets.forEach((ticket) => {
			const newTicket = { ...ticket, isDefault: true };
			const result = isDefault(newTicket);
			expect(result).toBe(true);
		});
	});
});

describe('isNotDefault', () => {
	it(`should return true if isDefault prop is boolean and it's value is false`, () => {
		tickets.forEach((ticket) => {
			const newTicket = { ...ticket, isDefault: false };
			const result = isNotDefault(newTicket);
			expect(result).toBe(true);
		});
	});

	it(`should return true if isDefault value is null or undefined`, () => {
		[null, undefined].forEach((value) => {
			const object = { isDefault: value };
			const result = isNotDefault(object);
			expect(result).toBe(true);
		});
	});

	it(`should return false if isDefault prop is boolean and it's value is true`, () => {
		tickets.forEach((ticket) => {
			const newTicket = { ...ticket, isDefault: true };
			const result = isNotDefault(newTicket);
			expect(result).toBe(false);
		});
	});
});
