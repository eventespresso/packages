import type React from 'react';
import type { BaseSubscriptionOptions, Subscriptions, UIRegistry } from '../subscription';

export interface NewEntitySubscriptionsOptions<T extends string> {
	entityType?: T; // to limit the subscription only to specific entityType
}

export interface NewEntitySubscriptionCbArgs<T extends string> extends NewEntitySubscriptionsOptions<T> {
	registry: NewEntityOptionsRegistry;
}

export interface NewEntitySubscription {
	subscribe: NewEntitySubscribeFn;
	getSubscriptions: <T extends string>(
		options?: NewEntitySubscriptionsOptions<T>
	) => Subscriptions<NewEntitySubscriptionCbArgs<T>, NewEntitySubscriptionsOptions<T>>;
}

export type NewEntitySubscriptionHook = <Domain extends string>(domain: Domain) => NewEntitySubscription;

export type NewEntitySubscribeFn = <T extends string>(
	cb: NewEntitySubscriptionCb<T>,
	options?: NewEntitySubscriptionsOptions<T>
) => VoidFunction;

export type NewEntitySubscriptionCb<T extends string> = (args: NewEntitySubscriptionCbArgs<T>) => void;

/* UI related types */
export interface NewEntityOptionsArgs<D extends string, ET extends string> extends BaseSubscriptionOptions<D> {
	entityType: ET;
}

export type NewEntityOptionsRegistryHook = <D extends string, ET extends string>(
	options: NewEntityOptionsArgs<D, ET>
) => NewEntityOptionsRegistry;

export type NewEntityOptionsRegistry = UIRegistry;

export interface NewEntityOptionsProps {
	className?: string;
	optionItems: Array<React.ReactNode>;
}

export interface ActionsOptionsComponentProps {
	[key: string]: any;
}

export type EntityOptionItems = {
	[key: string]: React.ComponentType;
};
