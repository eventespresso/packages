import { Entity } from '@eventespresso/data';

const entityListCacheIdString = <E extends Entity>(entities: E[]): string =>
	JSON.stringify(entities.map(({ cacheId }) => cacheId));

export default entityListCacheIdString;
