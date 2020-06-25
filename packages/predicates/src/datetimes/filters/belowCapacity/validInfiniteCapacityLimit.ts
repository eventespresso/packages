import { is } from 'ramda';

import type { Datetime } from '@eventespresso/edtr-services';

/**
 * @param {Object} date event object
 * @return {boolean} true if capacity property is valid and unlimited
 */
const validInfiniteCapacityLimit = ({ capacity }: Datetime): boolean => {
	return is(Number, capacity) && !isFinite(capacity);
};

export default validInfiniteCapacityLimit;
