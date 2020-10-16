import type React from 'react';
import type { Entity } from '@eventespresso/data';
import type { BaseSubscriptionOptions, Subscriptions, ElementProps, UIRegistryInterface } from '../subscription';

export interface EntityCardDetailsSubscriptionsOptions<T extends string> {
	entityType?: T; // to limit the subscription only to specific entityType
}

export interface EntityCardDetailsSubscriptionCbArgs<E extends Entity, T extends string, EP extends ElementProps>
	extends EntityCardDetailsSubscriptionsOptions<T> {
	entity: E;
	registry: EntityCardDetailsRegistry<EP>;
}

export interface EntityCardDetailsSubscriptionInterface {
	subscribe: EntityCardDetailsSubscribeFn;
	getSubscriptions: <E extends Entity, T extends string, EP extends ElementProps>(
		options?: EntityCardDetailsSubscriptionsOptions<T>
	) => Subscriptions<EntityCardDetailsSubscriptionCbArgs<E, T, EP>, EntityCardDetailsSubscriptionsOptions<T>>;
}

export type EntityCardDetailsSubscribeFn = <E extends Entity, T extends string, EP extends ElementProps>(
	cb: EntityCardDetailsSubscriptionCb<E, T, EP>,
	options?: EntityCardDetailsSubscriptionsOptions<T>
) => VoidFunction;

export type EntityCardDetailsSubscriptionCb<
	E extends Entity,
	T extends string,
	EP extends ElementProps = ElementProps
> = (args: EntityCardDetailsSubscriptionCbArgs<E, T, EP>) => void;

/* UI related types */
export interface EntityCardDetailsOptions<D extends string, ET extends string> extends BaseSubscriptionOptions<D> {
	entityType: ET;
	entityId: string;
}

export type EntityCardDetailsRegistryHook = <D extends string, ET extends string, EP extends ElementProps>(
	options: EntityCardDetailsOptions<D, ET>
) => EntityCardDetailsRegistry<EP>;

export type EntityCardDetailsRegistry<EP extends ElementProps> = UIRegistryInterface<EP>;

export interface CardDetailsComponentProps<E extends Entity> {
	entity: E;
	[key: string]: any;
}

export type EntityCardDetailsItems = {
	[key: string]: React.ComponentType;
};
