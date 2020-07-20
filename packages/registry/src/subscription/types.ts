import type { AnyObject } from '@eventespresso/services';

export interface BaseSubscriptionOptions<D extends string> {
	domain: D;
}

export interface SubscriptionServiceOptions<D extends string, S extends string> extends BaseSubscriptionOptions<D> {
	service: S;
}

export interface SubscriptionManagerInterface<SR extends ServiceRegistry = ServiceRegistry> {
	addToServiceRegistry: <K extends keyof SR>(key: K, value: SR[K]) => void;
	getServiceRegistryItem: <K extends keyof SR>(key: K, defaultValue?: any) => SR[K];
	getSubscriptions: <CbArgs = AnyObject, Options = AnyObject, CbReturn = void>() => Subscriptions<
		CbArgs,
		Options,
		CbReturn
	>;
	subscribe: SubscribeFn;
}

export type SubscribeFn = <CbArgs = AnyObject, Options = AnyObject, CbReturn = void>(
	cb: SubscriptionCallback<CbArgs, CbReturn>,
	options?: Options
) => VoidFunction;

export type SubscriptionCallback<CbArgs = AnyObject, CbReturn = void> = (args: CbArgs) => CbReturn;

export type Subscriptions<CbArgs = AnyObject, Options = AnyObject, CbReturn = void> = {
	[key: string]: Subscription<CbArgs, Options, CbReturn>;
};

export interface Subscription<CbArgs = AnyObject, Options = AnyObject, CbReturn = void> {
	callback: SubscriptionCallback<CbArgs, CbReturn>;
	options: Options;
}

export interface ServiceRegistry {
	subscriptions: Subscriptions;
}

export interface UpdateSubscriptionProps {
	id: string;
	callback?: SubscriptionCallback;
	options?: AnyObject;
	action?: 'add' | 'remove';
}

export type SubscriptionRegistry = {
	// domain name e.g. "eventEditor"
	[key: string]: {
		// service id e.g. "entityListFilterBar"
		[key: string]: ServiceRegistry;
	};
};

/**
 * e.g.
 * elementRegistry = {
 *     eventEditor: {
 *         entityListFilterBar: {
 *             'dates-list: [
 *                 9: {
 *                      sortBy: () => null,
 *                 },
 *                 10: {
 *                      datetimesToShow: () => null,
 *                      search: () => null,
 *                 },
 *             ],
 *             'tickets-list': [
 *                 10: {
 *                     sortBy: () => null,
 *                  ticketsToShow: () => null,
 *                 },
 *                 11: {
 *                      search: () => null,
 *                 },
 *             ],
 *         },
 *         entityActions: {
 *             datetime: {
 *                 YTBUKTUYRytB: [
 *                     10 : {
 *                         editDate: () => null,
 *                         assignTickets: () => null,
 *                     }
 *                 ],
 *             },
 *             ticket: {
 *                 KJGNFGHFjhfbY: [
 *                     10 : {
 *                         editTicket: () => null,
 *                         tpc: () => null,
 *                     }
 *                 ],
 *             },
 *         },
 *     },
 * }
 */
export type ElementRegistry = {
	// domain name e.g. "eventEditor"
	[key: string]: {
		// service id e.g. "entityListFilterBar"
		[key: string]: {
			// service type id e.g. "dates-list"
			[key: string]: AnyObject;
		};
	};
};

type Path = Array<string>;

export interface UIRegistryOptions<D extends string, S extends string> extends SubscriptionServiceOptions<D, S> {
	path: Path;
}

export interface UIRegistryInterface<EP extends ElementProps> {
	registerElement: (key: string, component: React.ComponentType<EP>, priority?: number) => void;
	unRegisterElement: (key: string, priority?: number) => void;
	getElements: () => UIElements<EP>;
	generateElements: (props?: Partial<EP>) => Array<React.ReactNode>;
}

export interface ElementProps {
	totalCount: number;
	key: string;
}
/**
 * List of UI elements registered for a service type
 * e.g. List of entityActionsMenu items
 */
export type UIElements<EP extends ElementProps> = {
	[key: string]: React.ComponentType<EP>;
};
