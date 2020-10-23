import { allPass, filter, pathEq } from 'ramda';
import invariant from 'invariant';
import type { EntityListFilterStateManager } from '@eventespresso/services';

import { SubscriptionManager } from '../subscription';
import type { EntityTableFiltersInterface } from './types';
import { EntityTableFiltersType } from './types';

type ELFSM = EntityListFilterStateManager<any>;

type ETF<L extends string, FS extends ELFSM> = EntityTableFiltersInterface<L, FS>;

type GetSetCbArgs = {
	listId: string;
	type?: 'filter';
	callback?: any;
	priority?: number;
};

/**
 * D: Domain name e.g. "eventEditor"
 * L: List name name e.g. "dates-list", "tickets-list"
 * FS: Filter State (manager): The filter state instance for the current entity list
 */
class EntityTableFilters<D extends string, L extends string, FS extends ELFSM> implements ETF<L, FS> {
	private subscriptionManager: SubscriptionManager<D, EntityTableFiltersType>;

	public entityListId: L;

	constructor(domain: D, entityListId: L) {
		this.subscriptionManager = new SubscriptionManager<D, EntityTableFiltersType>({
			domain,
			service: 'entityTableFilter',
		});

		this.entityListId = entityListId;
	}

	registerCallback = ({ callback, listId, priority, type }: GetSetCbArgs): VoidFunction => {
		invariant(listId, 'No `listId` provided');
		return this.subscriptionManager.subscribe(callback, { listId, priority, type });
	};

	getCallbacks = ({ listId = this.entityListId, type }: GetSetCbArgs): ReturnType<ETF<L, FS>['getFilters']> => {
		invariant(listId, 'No `listId` provided');
		const allSubscriptions = this.subscriptionManager.getSubscriptions();

		const isForList = pathEq(['options', 'listId'], listId);
		const isOfType = pathEq(['options', 'type'], type);
		const isOfTypeAndForList = allPass([isForList, isOfType]);

		return filter(isOfTypeAndForList, allSubscriptions);
	};

	getFilters: ETF<L, FS>['getFilters'] = (listId = this.entityListId) => {
		return this.getCallbacks({ listId, type: 'filter' });
	};

	registerFilter: ETF<L, FS>['registerFilter'] = (callback, priority = 10, listId = this.entityListId) => {
		return this.registerCallback({ callback, listId, priority, type: 'filter' });
	};
}

export default EntityTableFilters;
