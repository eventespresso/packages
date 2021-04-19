import { __ } from '@eventespresso/i18n';
import type { ApolloError, Order, EntityQueryOrderBy, AttendeesOrderByFields } from '@eventespresso/data';
import type { OptionsType } from '@eventespresso/adapters';

export const buildEntitySelectOptions = (list: Array<any>, loading: boolean, error: ApolloError): OptionsType => {
	if (loading) {
		return [
			{
				label: __('Loading…'),
				value: '',
			},
		];
	}
	if (error) {
		return [
			{
				label: __('Error'),
				value: '',
			},
		];
	}
	return [
		{
			label: __('Select…'),
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
