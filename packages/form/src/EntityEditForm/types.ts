import type { Entity } from '@eventespresso/data';

export interface BaseProps<E extends Entity> {
	entity: E;
}
