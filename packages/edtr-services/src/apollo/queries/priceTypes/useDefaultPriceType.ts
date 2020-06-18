import usePriceTypes from './usePriceTypes';
import { PriceType } from '../../types';
import { getDefaultPriceModifierType } from '@eventespresso/predicates';

/**
 * A custom react hook for retrieving the default price type object.
 */
const useDefaultPriceType = (): PriceType => {
	const allPriceTypes = usePriceTypes();
	const defaultPriceType = getDefaultPriceModifierType(allPriceTypes);
	return defaultPriceType ? defaultPriceType : null;
};

export default useDefaultPriceType;
