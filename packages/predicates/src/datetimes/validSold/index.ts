import { is } from 'ramda';

import { Datetime } from '@eventespresso/edtr-services';

const validSold = ({ sold }: Datetime): boolean => {
	return is(Number, sold);
};

export default validSold;
