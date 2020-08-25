import type { Entity } from '@eventespresso/data';

export type EntityListSearchProps<E extends Entity> = {
	entities: Array<E>;
	searchText: string;
	searchFields: Readonly<Array<keyof E>>;
};
