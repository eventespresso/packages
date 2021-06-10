import { allPass, filter, pathEq } from 'ramda';
import invariant from 'invariant';
import type { Entity } from '@eventespresso/data';
import type { EntityListFilterStateManager } from '@eventespresso/services';

import { SubscriptionManager } from '../subscription';
import type { FilterBarServiceInterface } from './types';
import { FilterBarServiceType } from './types';

type ELFSM = EntityListFilterStateManager<any>;

type FBS<L extends string, E extends Entity, FS extends ELFSM> = FilterBarServiceInterface<L, E, FS>;

type GetSetCbArgs = {
	listId: string;
	type: 'filter' | 'sort' | 'search';
	callback?: any;
	priority?: number;
};

/**
 * D: Domain name e.g. "eventEditor"
 * L: List name name e.g. "dates-list", "tickets-list"
 * E: Entity: The current entity e.g. "Datetime", "Ticket"
 * FS: Filter State (manager): The filter state instance for the current entity list
 */
class FilterBarService<D extends string, L extends string, E extends Entity, FS extends ELFSM>
	implements FBS<L, E, FS>
{
	private subscriptionManager: SubscriptionManager<D, FilterBarServiceType>;

	public entityListId: L;

	constructor(domain: D, entityListId: L) {
		this.subscriptionManager = new SubscriptionManager<D, FilterBarServiceType>({
			domain,
			service: FilterBarServiceType.FILTER,
		});

		this.entityListId = entityListId;
	}

	registerCallback = ({ callback, listId, priority, type }: GetSetCbArgs): VoidFunction => {
		invariant(listId, 'No `listId` provided');
		return this.subscriptionManager.subscribe(callback, { listId, priority, type });
	};

	getCallbacks = ({ listId = this.entityListId, type }: GetSetCbArgs): ReturnType<FBS<L, E, FS>['getFilters']> => {
		invariant(listId, 'No `listId` provided');
		const allSubscriptions = this.subscriptionManager.getSubscriptions();

		const isForList = pathEq(['options', 'listId'], listId);
		const isOfType = pathEq(['options', 'type'], type);
		const isOfTypeAndForList = allPass([isForList, isOfType]);

		return filter(isOfTypeAndForList, allSubscriptions);
	};

	getFilters: FBS<L, E, FS>['getFilters'] = (listId = this.entityListId) => {
		return this.getCallbacks({ listId, type: 'filter' });
	};

	getSorters: FBS<L, E, FS>['getSorters'] = (listId = this.entityListId) => {
		return this.getCallbacks({ listId, type: 'sort' });
	};

	getSearches: FBS<L, E, FS>['getSearches'] = (listId = this.entityListId) => {
		return this.getCallbacks({ listId, type: 'search' });
	};

	registerFilter: FBS<L, E, FS>['registerFilter'] = (callback, priority = 10, listId = this.entityListId) => {
		return this.registerCallback({ callback, listId, priority, type: 'filter' });
	};

	registerSorter: FBS<L, E, FS>['registerSorter'] = (callback, priority = 10, listId = this.entityListId) => {
		return this.registerCallback({ callback, listId, priority, type: 'sort' });
	};

	registerSearch: FBS<L, E, FS>['registerSearch'] = (callback, priority = 10, listId = this.entityListId) => {
		return this.registerCallback({ callback, listId, priority, type: 'search' });
	};
}

export default FilterBarService;
