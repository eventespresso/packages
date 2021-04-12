import { Cacheable } from '@eventespresso/data';
import { getCacheIds } from '@eventespresso/predicates';

export type EntityCacheIdsProps<E extends Cacheable> = {
	entities: Array<E>;
};

export const EntityCacheIds = <E extends Cacheable>({ entities }: EntityCacheIdsProps<E>): JSX.Element => {
	return <div className='ee-entity-cache-ids' data-cache-ids={getCacheIds(entities).join(',')}></div>;
};
