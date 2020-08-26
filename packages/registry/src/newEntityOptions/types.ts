import type React from 'react';
import type { BaseSubscriptionOptions, Subscriptions, UIRegistryInterface, ElementProps } from '../subscription';

export interface NewEntitySubscriptionsOptions<T extends string> {
	entityType?: T; // to limit the subscription only to specific entityType
}

export interface NewEntitySubscriptionCbArgs<T extends string, EP extends ElementProps = ElementProps>
	extends NewEntitySubscriptionsOptions<T> {
	registry: NewEntityOptionsRegistryInterface<EP>;
}

export interface NewEntitySubscriptionInterface {
	subscribe: NewEntitySubscribeFn;
	getSubscriptions: <T extends string>(
		options?: NewEntitySubscriptionsOptions<T>
	) => Subscriptions<NewEntitySubscriptionCbArgs<T>, NewEntitySubscriptionsOptions<T>>;
}

export type NewEntitySubscribeFn = <T extends string>(
	cb: NewEntitySubscriptionCb<T>,
	options?: NewEntitySubscriptionsOptions<T>
) => VoidFunction;

export type NewEntitySubscriptionCb<T extends string, EP extends ElementProps = ElementProps> = (
	args: NewEntitySubscriptionCbArgs<T, EP>
) => void;

/* UI related types */
export interface NewEntityOptionsArgs<D extends string, ET extends string> extends BaseSubscriptionOptions<D> {
	entityType?: ET;
	path?: Array<string>;
}

export interface NewEntityOptionsRegistryInterface<EP extends ElementProps> extends UIRegistryInterface<EP> {}

export interface NewEntityOptionsProps {
	className?: string;
	optionItems: Array<React.ReactNode>;
}
