import { renderHook } from '@testing-library/react-hooks';

import usePriceQueryOptions from '../usePriceQueryOptions';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from '../../tickets/test/data';
import useInitTicketTestCache from '../../tickets/test/useInitTicketTestCache';
import { getGuids } from '@eventespresso/predicates';

const timeout = 5000; // milliseconds
describe('usePriceQueryOptions()', () => {
	it('checks if the query operation variables are correct', async () => {
		const wrapper = ApolloMockedProvider();
		const { result, waitForNextUpdate: waitForUpdate } = renderHook(
			() => {
				useInitTicketTestCache();
				return usePriceQueryOptions();
			},
			{ wrapper }
		);
		await waitForUpdate({ timeout });

		expect(result.current.variables.where.ticketIn).toEqual(getGuids(nodes).sort());
	});
});
