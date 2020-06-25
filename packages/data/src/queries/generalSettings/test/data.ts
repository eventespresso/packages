import { GraphQLError } from 'graphql';

import { GeneralSettingsData } from '@eventespresso/services';
import { GET_GENERAL_SETTINGS } from '..';
import type { ReadQueryOptions } from '../../types';

export const request: ReadQueryOptions = {
	query: GET_GENERAL_SETTINGS,
};

export const generalSettings = {
	dateFormat: 'F j, Y',
	timeFormat: 'g:i a',
	timezone: 'Asia/Kolkata',
	__typename: 'GeneralSettings',
};

export const data: GeneralSettingsData = {
	generalSettings,
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
