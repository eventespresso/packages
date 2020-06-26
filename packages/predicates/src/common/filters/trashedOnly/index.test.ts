import { trashedOnly } from './index';
import datetimes from '../../../datetimes/filters/tests/data';
import { tickets } from '../../../tickets/test/data';

test('Should return only trashed datetimes', () => {
	const noTrash = trashedOnly(datetimes);
	expect(noTrash.length).toBe(0);
	datetimes[0].isTrashed = true;
	const trashed = trashedOnly(datetimes);
	expect(trashed.length).toBe(1);
});

test('Should return only trashed tickets', () => {
	const noTrash = trashedOnly(tickets);
	expect(noTrash.length).toBe(0);
	tickets[0].isTrashed = true;
	const trashed = trashedOnly(tickets);
	expect(trashed.length).toBe(1);
});
