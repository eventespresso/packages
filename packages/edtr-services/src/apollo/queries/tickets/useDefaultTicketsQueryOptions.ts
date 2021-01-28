import { useMemo } from 'react';

import useTicketQueryOptions from './useTicketQueryOptions';

const datetimeIn = [];
const queryArgs = { isDefault: true };

const useDefaultTicketsQueryOptions = (): ReturnType<typeof useTicketQueryOptions> => {
	const options = useTicketQueryOptions(datetimeIn, queryArgs);

	return useMemo(
		() => ({
			...options,
			// TODO remove this after DOM data for default ticket
			fetchPolicy: 'cache-first',
		}),
		[options]
	);
};

export default useDefaultTicketsQueryOptions;
