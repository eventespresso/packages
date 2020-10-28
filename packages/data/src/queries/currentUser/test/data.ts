import { GraphQLError } from 'graphql';

import type { Viewer, User } from '@eventespresso/data';
import type { CacheQueryOptions } from '../../types';
import { GET_CURRENT_USER } from '..';

export const request: CacheQueryOptions = {
	query: GET_CURRENT_USER,
};

export const currentUser: User = {
	description: null,
	email: 'user@eventespresso.com',
	firstName: null,
	id: 'dXNlcjox',
	name: 'admin',
	nicename: 'admin',
	nickname: 'admin',
	lastName: null,
	locale: 'en_US',
	username: 'admin',
	__typename: 'User',
};

export const data: Viewer = {
	viewer: currentUser,
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
