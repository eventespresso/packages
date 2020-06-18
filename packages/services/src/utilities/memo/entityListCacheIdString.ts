import { Entity } from '@dataServices/types';
import { getCacheIds } from '@eventespresso/services/predicates';

const entityListCacheIdString = <E extends Entity>(entities: E[]): string => JSON.stringify(getCacheIds(entities));

export default entityListCacheIdString;
