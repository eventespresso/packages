import type { Price } from '../../types';
import usePriceQueryOptions from './usePriceQueryOptions';
import usePrices from './usePrices';
import { useDefaultTicketIds } from '../tickets';

/**
 * A custom react hook to retrieve all the prices of default tickets
 */
const useDefaultTicketsPrices = (): Price[] => {
	const defaultTicketIds = useDefaultTicketIds();
	const options = usePriceQueryOptions(defaultTicketIds);

	return usePrices({
		...options,
		// TODO remove this after DOM data for default ticket
		fetchPolicy: 'cache-first',
	});
};

export default useDefaultTicketsPrices;
