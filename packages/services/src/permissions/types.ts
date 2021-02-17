import type { EntityId } from '@eventespresso/data';

type EntityWithoutDefault = 'ticket' | 'price' | 'price_type';
type EntityWithDefault = `${'default_'}${EntityWithoutDefault}`;

export type SingularEntityType = 'datetime' | EntityWithoutDefault | EntityWithDefault;

export type PluralEntityType = `${SingularEntityType}s`;

export type EntityType = SingularEntityType | PluralEntityType;

export type CurrentUserCan = <E extends Record<'userId', EntityId>>(
	capability: 'read' | 'edit' | 'delete' | Capability,
	entityType?: EntityType,
	entity?: E
) => boolean;

export type Capability = string;
