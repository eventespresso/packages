import { NOW } from '@eventespresso/constants';
import { sub } from '@eventespresso/dates';

export const data = [
	{
		name: '1',
		// This date is in the past
		startDate: sub('days', NOW, 20),
		endDate: sub('days', NOW, 19),
	},
	{
		name: '2',
		// This date is in the past
		startDate: sub('days', NOW, 10),
		endDate: sub('days', NOW, 9),
	},
	{
		name: '3',
		// This date is in the current month
		startDate: NOW,
		endDate: NOW,
	},
	{
		name: '4',
		isTrashed: true,
	},
	{
		name: '5',
	},
	{
		name: '6',
	},
];
