import type { ApolloError } from 'apollo-client';
import { __ } from '@wordpress/i18n';

import type { Order, EntityQueryOrderBy, AttendeesOrderByFields } from '@eventespresso/data';
import type { OptionsType } from '@eventespresso/adapters';

export const buildEntitySelectOptions = (list: Array<any>, loading: boolean, error: ApolloError): OptionsType => {
	if (loading) {
		return [
			{
				label: __('Loading...', 'event_espresso'),
				value: '',
			},
		];
	}
	if (error) {
		return [
			{
				label: __('Error', 'event_espresso'),
				value: '',
			},
		];
	}
	return [
		{
			label: __('Select...', 'event_espresso'),
			value: '',
		},
		...list.map(({ id: value, name: label }) => ({ label, value })),
	];
};


export const getAttendeesOrderBy = (orderBy: string, order: Order): EntityQueryOrderBy<AttendeesOrderByFields> => {
	const orderByFirstName = {
		field: 'FIRST_NAME',
		order,
	};
	const orderByLastName = {
		field: 'LAST_NAME',
		order,
	};
	let orderByFields = [];
	switch (orderBy) {
		case 'FIRST_THEN_LAST_NAME':
			orderByFields = [orderByFirstName, orderByLastName];
			break;
		case 'LAST_THEN_FIRST_NAME':
			orderByFields = [orderByLastName, orderByFirstName];
			break;
		default:
			orderByFields = [
				{
					field: orderBy,
					order,
				},
			];
			break;
	}

	return orderByFields;
};
