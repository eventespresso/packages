import { GraphQLError } from 'graphql';

import { CacheQueryOptions } from '@eventespresso/data';
import { Datetime, DatetimeEdge } from '@blocksServices/apollo/types';

export const request: CacheQueryOptions = null; // to be set dynamically

export const nodes: Datetime[] = [
	{
		id: 'datetime-abc',
		dbId: 1,
		cacheId: '',
		name: 'Date ABC',
		__typename: 'EspressoDatetime',
	},
	{
		id: 'datetime-def',
		dbId: 2,
		cacheId: '',
		name: 'Date DEF',
		__typename: 'EspressoDatetime',
	},
	{
		id: 'datetime-pqr',
		dbId: 3,
		cacheId: '',
		name: 'Date PQR',
		__typename: 'EspressoDatetime',
	},
];

export const edge: DatetimeEdge = {
	nodes,
	__typename: 'EspressoRootQueryDatetimesConnection',
};

export const data = {
	espressoDatetimes: edge,
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
