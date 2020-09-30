import { GraphQLError } from 'graphql';

import { CacheQueryOptions } from '@eventespresso/data';
import { Ticket, TicketEdge } from '@blocksServices/apollo/types';

export const request: CacheQueryOptions = null; // to be set dynamically

export const nodes: Ticket[] = [
	{
		id: 'ticket-abc',
		dbId: 1,
		cacheId: '',
		name: 'Ticket ABC',
		__typename: 'EspressoTicket',
	},
	{
		id: 'ticket-def',
		dbId: 2,
		cacheId: '',
		name: 'Ticket DEF',
		__typename: 'EspressoTicket',
	},
	{
		id: 'ticket-pqr',
		dbId: 3,
		cacheId: '',
		name: 'Ticket PQR',
		__typename: 'EspressoTicket',
	},
];

export const edge: TicketEdge = {
	nodes,
	__typename: 'EspressoRootQueryTicketsConnection',
};

export const data = {
	espressoTickets: edge,
};

const errors = [new GraphQLError('Error!')];

export const successMocks = [
	{
		request,
		result: { data },
	},
];

export const errorMocks = [
	{
		// modify request to simulate error
		request: {
			...request,
			variables: {},
		},
		result: { errors },
		error: new Error('ERROR!'),
	},
];
