import { renderHook } from '@testing-library/react-hooks';

import usePriceQueryOptions from '../usePriceQueryOptions';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from '../../events/test/data';
import useInitTicketTestCache from '../../tickets/test/useInitTicketTestCache';
import { getGuids } from '@eventespresso/predicates';
import { actWait } from '@eventespresso/utils/src/test';

describe('usePriceQueryOptions()', () => {
	it('checks if the query operation variables are correct', async () => {
		const wrapper = ApolloMockedProvider();
		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				return usePriceQueryOptions();
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current.variables.where.eventId).toEqual(getGuids(nodes).sort());
	});
});
