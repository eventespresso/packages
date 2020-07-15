import { useMemo } from 'react';

import { entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { entityListCacheIdString, useRelations } from '@eventespresso/services';
import useDatetimes from './useDatetimes';
import type { Datetime } from '../../types';
import type { RelatedEntitiesHook } from '../types';

const useRelatedDatetimes: RelatedEntitiesHook<Datetime, 'datetimes'> = ({ entity, entityId }) => {
	const datetimes = useDatetimes();
	const { getRelations } = useRelations();
	const relatedDatetimeIds = getRelations({
		entity,
		entityId,
		relation: 'datetimes',
	});

	const cacheIds = entityListCacheIdString(datetimes);
	const relatedDatetimeIdsStr = JSON.stringify(relatedDatetimeIds);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => entitiesWithGuIdInArray(datetimes, relatedDatetimeIds), [relatedDatetimeIdsStr, cacheIds]);
};

export default useRelatedDatetimes;
