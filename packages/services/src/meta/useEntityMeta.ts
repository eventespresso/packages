import { useCallback, useMemo } from 'react';
import { assocPath, mergeDeepRight } from 'ramda';

import { ReactiveVar, useReactiveVar } from '@eventespresso/data';

import { EntityMetaMap, ManageEntityMeta } from './types';

type MEM = ManageEntityMeta;

export const useEntityMeta = (metaReactiveVar: ReactiveVar<EntityMetaMap>): MEM => {
	const metaMap = useReactiveVar(metaReactiveVar);

	const getMetaValue = useCallback<MEM['getMetaValue']>(
		(entityId, metaKey) => {
			return metaMap?.[entityId]?.[metaKey];
		},
		[metaMap]
	);

	const setMetaValue = useCallback<MEM['setMetaValue']>(
		(entityId, metaKey, metaValue) => {
			const newMetaMap = assocPath([entityId, metaKey], metaValue, metaMap);
			metaReactiveVar(newMetaMap);
		},
		[metaReactiveVar, metaMap]
	);

	const getEntityMeta = useCallback<MEM['getEntityMeta']>(
		(entityId) => {
			return metaMap?.[entityId];
		},
		[metaMap]
	);

	const setEntityMeta = useCallback<MEM['setEntityMeta']>(
		(entityId, entityMeta) => {
			const newMetaMap = assocPath([entityId], entityMeta, metaMap);
			metaReactiveVar(newMetaMap);
		},
		[metaReactiveVar, metaMap]
	);

	const getMetaMap = useCallback<MEM['getMetaMap']>(() => metaMap, [metaMap]);

	const resetMetaMap = useCallback<MEM['resetMetaMap']>(
		(newMetaMap) => {
			metaReactiveVar(newMetaMap);
		},
		[metaReactiveVar]
	);

	const mergeMetaMap = useCallback<MEM['mergeMetaMap']>(
		(newMetaMap) => {
			const mergedMetaMap = mergeDeepRight(metaMap, newMetaMap);

			metaReactiveVar(mergedMetaMap);
		},
		[metaMap, metaReactiveVar]
	);

	return useMemo(
		() => ({
			getEntityMeta,
			getMetaMap,
			getMetaValue,
			mergeMetaMap,
			resetMetaMap,
			setEntityMeta,
			setMetaValue,
		}),
		[getEntityMeta, getMetaMap, getMetaValue, mergeMetaMap, resetMetaMap, setEntityMeta, setMetaValue]
	);
};
