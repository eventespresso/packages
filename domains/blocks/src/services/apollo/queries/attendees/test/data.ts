import { GraphQLError } from 'graphql';

import { ReadQueryOptions } from '@eventespresso/data';
import { Attendee, AttendeeEdge } from '@blocksServices/apollo/types';

export const request: ReadQueryOptions = null; // to be set dynamically

export const nodes: Attendee[] = [
	{
		id: 'attendee-abc',
		dbId: 1,
		cacheId: '',
		avatar: 'avatar-abc',
		fullName: 'Mr. ABC Dude',
		__typename: 'EspressoAttendee',
	},
	{
		id: 'attendee-def',
		dbId: 2,
		cacheId: '',
		avatar: 'avatar-def',
		fullName: 'Mr. DEF Who Can Hear',
		__typename: 'EspressoAttendee',
	},
	{
		id: 'attendee-pqr',
		dbId: 3,
		cacheId: '',
		avatar: 'avatar-pqr',
		fullName: 'Mr. PQR Real',
		__typename: 'EspressoAttendee',
	},
];

export const edge: AttendeeEdge = {
	nodes,
	__typename: 'EspressoRootQueryAttendeesConnection',
};

export const data = {
	espressoAttendees: edge,
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
