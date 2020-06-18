import { Datetime } from '@eventespresso/edtr-services';
import { isBooleanTrue } from '@eventespresso/services';

const isSoldOut = (date: Datetime): boolean =>
	isBooleanTrue(date.isSoldOut) || (isFinite(date.capacity) && date.capacity > -1 && date.capacity <= date.sold);

export default isSoldOut;
