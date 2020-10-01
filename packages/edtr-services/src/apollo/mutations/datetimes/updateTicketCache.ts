import type { CacheUpdaterFnArgs } from '../types';
import { GET_TICKETS } from '../../queries';
import type { TicketsList } from '../../types';
import { sortBy, identity } from 'ramda';
import type { CacheQueryOptions, WriteQueryOptions } from '@eventespresso/data';

const updateTicketCache = ({ cache, datetimeIn, datetimeId, action }: CacheUpdaterFnArgs): void => {
	const queryOptions: CacheQueryOptions = {
		query: GET_TICKETS,
		variables: {
			where: {
				datetimeIn: sortBy(identity, datetimeIn),
			},
		},
	};
	let data: TicketsList;
	// Read the existing data from cache.
	try {
		data = cache.readQuery<TicketsList>(queryOptions);
	} catch (error) {
		data = null;
	}

	// if there are no tickets
	if (!data?.espressoTickets) {
		return;
	}

	let newDatetimeIn: typeof datetimeIn;

	switch (action) {
		case 'add':
			newDatetimeIn = [...datetimeIn, datetimeId];
			break;
		case 'remove':
			newDatetimeIn = datetimeIn.filter((id) => id !== datetimeId);
			break;
		default:
			newDatetimeIn = datetimeIn;
			break;
	}

	const writeOptions: WriteQueryOptions = {
		query: GET_TICKETS,
		data,
		variables: {
			where: {
				datetimeIn: sortBy(identity, newDatetimeIn),
			},
		},
	};

	// write the data to cache without
	// mutating the cache directly
	cache.writeQuery<TicketsList>(writeOptions);
};

export default updateTicketCache;
