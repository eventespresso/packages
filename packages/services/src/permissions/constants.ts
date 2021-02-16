import { EntityType } from './types';

export const entityPlurals: Partial<Record<EntityType, `${EntityType}${string}`>> = {
	datetime: 'datetimes',
	default_price: 'default_prices',
	default_price_type: 'default_price_types',
	default_ticket: 'default_tickets',
	price: 'prices',
	price_type: 'price_types',
	ticket: 'tickets',
};
