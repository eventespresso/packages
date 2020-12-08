import { addAction, addFilter, applyFilters, doAction } from '@wordpress/hooks';
import type { OmitFirstFromArray } from '@eventespresso/utils';

export type ActionObject = {
	// action/filter name => array of arguments
	[name: string]: Array<any>;
};

type FilterCallback<T extends Array<any>> = (firstArg?: T[0], ...args: [...OmitFirstFromArray<T>]) => T[0];
type ActionCallback<T extends Array<any>> = (...args: [...T]) => void;

export type Hooks<Actions extends ActionObject, Filters extends ActionObject> = {
	addFilter: <K extends keyof Filters>(
		name: K,
		namespace: string,
		callback: FilterCallback<Filters[K]>,
		priority?: number
	) => void;
	applyFilters: <K extends keyof Filters>(
		name: K,
		firstArg?: Filters[K][0],
		...args: [...OmitFirstFromArray<Filters[K]>]
	) => Filters[K][0];
	addAction: <K extends keyof Actions>(
		name: K,
		namespace: string,
		callback: ActionCallback<Actions[K]>,
		priority?: number
	) => void;
	doAction: <K extends keyof Actions>(
		name: K,
		firstArg?: Actions[K][0],
		...args: [...OmitFirstFromArray<Actions[K]>]
	) => void;
};

export const getHooks = <A extends ActionObject, F extends ActionObject>(): Hooks<A, F> => {
	return {
		addFilter,
		addAction,
		applyFilters,
		doAction,
	} as Hooks<A, F>;
};
