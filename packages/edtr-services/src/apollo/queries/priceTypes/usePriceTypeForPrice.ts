import isEmpty from 'ramda/src/isEmpty';
import { useRelations } from '@eventespresso/services';
import useDefaultPriceType from './useDefaultPriceType';
import { EntityId } from '@eventespresso/data';
import { entitiesWithGuIdInArray } from '@eventespresso/predicates';

import type { PriceType } from '../../types';
import usePriceTypes from './usePriceTypes';
/**
 * A custom react hook for retrieving the related priceType from cache for the given Price entity
 *
 * @param {string} priceId price.id
 */
const usePriceTypeForPrice = (priceId: EntityId): PriceType => {
	const { getRelations } = useRelations();
	// get related priceTypes for this price
	const relatedPriceTypeIds = getRelations({
		entity: 'prices',
		entityId: priceId,
		relation: 'priceTypes',
	});

	// get the default price type object
	const defaultPriceType = useDefaultPriceType();
	const allPriceTypes = usePriceTypes();

	const relatedPriceTypes = entitiesWithGuIdInArray(allPriceTypes, relatedPriceTypeIds);

	return !isEmpty(relatedPriceTypes) ? relatedPriceTypes[0] : defaultPriceType;
};

export default usePriceTypeForPrice;
