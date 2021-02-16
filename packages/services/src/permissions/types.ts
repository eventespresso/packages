import type { EntityId } from '@eventespresso/data';

export type EntityType = `${'datetime' | `${'default_' | ''}${'ticket' | 'price' | 'price_type'}`}${'s' | ''}`;

export type CurrentUserCan = <E extends Record<'userId', EntityId>>(
	capability: 'read' | 'edit' | 'delete' | Capability,
	entityType?: EntityType,
	entity?: E
) => boolean;

export type Capability = string;
