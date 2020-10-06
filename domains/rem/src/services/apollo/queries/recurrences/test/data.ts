import { GraphQLError } from 'graphql';

import { Recurrence, RecurrenceEdge } from '../../../types';
import { CacheQueryOptions } from '@eventespresso/data';

export const request: CacheQueryOptions = null; // to be generated via Query Options hook

export const nodes: Recurrence[] = [
	{
		id: 'rec-abc',
		dbId: 1,
		cacheId: '',
		dateDuration: '1:days',
		exDates: 'abc',
		exRule: 'def',
		name: 'REC ABC',
		rDates: 'klm',
		rRule: 'nop',
		__typename: 'EspressoRecurrence',
	},
	{
		id: 'rec-pqr',
		dbId: 2,
		cacheId: '',
		dateDuration: '1:days',
		exDates: 'abc2',
		exRule: 'def2',
		name: 'REC PQR',
		rDates: 'klm2',
		rRule: 'nop2',
		__typename: 'EspressoRecurrence',
	},
	{
		id: 'rec-xyz',
		dbId: 3,
		cacheId: '',
		dateDuration: '1:days',
		exDates: 'abc3',
		exRule: 'def3',
		name: 'REC XYZ',
		rDates: 'klm3',
		rRule: 'nop3',
		__typename: 'EspressoRecurrence',
	},
];

export const edge: RecurrenceEdge = {
	nodes,
	__typename: 'EspressoRootQueryRecurrencesConnection',
};

export const data = {
	espressoRecurrences: edge,
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
