import { Entity } from '@eventespresso/data';
import type { EntityListBaseProps } from '@eventespresso/components';
import entityListCacheIdString from './entityListCacheIdString';

const entitiesUnchanged = <E extends Entity>(
	prevProps: EntityListBaseProps<E>,
	nextProps: EntityListBaseProps<E>
): boolean => {
	const prevValue = entityListCacheIdString(prevProps.entities);
	const nextValue = entityListCacheIdString(nextProps.entities);
	return prevValue === nextValue;
};

export default entitiesUnchanged;
