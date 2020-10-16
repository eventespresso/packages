import type { TableRow } from '@eventespresso/components';
import type { Entity } from '@eventespresso/data';
import type { EntityListFilterStateManager } from '@eventespresso/services';
import type { SubscribeFn, SubscriptionCallback, Subscriptions } from '../subscription';

export type EntityTableFiltersType = 'entityTableFilter';

type ELFSM = EntityListFilterStateManager<any>;

export interface EntityTableFiltersSubscriptionsBaseOptions<L extends string> {
	listId?: L; // to limit the subscription only to specific listId
}

export interface EntityTableFiltersCbArgs<FS extends ELFSM, E extends Entity> {
	row: TableRow;
	filterState: FS;
	type: 'body' | 'footer' | 'header';
	entity: E;
}

type EntityTableFiltersSubList<L extends string, FS extends ELFSM, E extends Entity> = Subscriptions<
	EntityTableFiltersCbArgs<FS, E>,
	EntityTableFiltersFnOptions<L>,
	TableRow
>;

export interface EntityTableFiltersInterface<L extends string, FS extends ELFSM, E extends Entity>
	extends EntityTableFiltersFns<L, FS, E> {
	getFilters: (listId?: L) => EntityTableFiltersSubList<L, FS, E>;
}

export interface EntityTableFiltersFns<L extends string, FS extends ELFSM, E extends Entity> {
	registerFilter: EntityTableFiltersRegistryFn<L, FS, E>;
}

interface EntityTableFiltersFnOptions<L extends string> extends EntityTableFiltersSubscriptionsBaseOptions<L> {
	type: string;
}

export type EntityTableFiltersRegistryFn<L extends string, FS extends ELFSM, E extends Entity> = (
	callback: SubscriptionCallback<EntityTableFiltersCbArgs<FS, E>>,
	priority?: number,
	listId?: L
) => ReturnType<SubscribeFn>;
