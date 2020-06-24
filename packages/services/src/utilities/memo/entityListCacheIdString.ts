import { Entity } from '@eventespresso/data';

const entityListCacheIdString = <E extends Entity>(entities: E[]): string =>
	JSON.stringify(entities.map(({ id }) => id));

export default entityListCacheIdString;
