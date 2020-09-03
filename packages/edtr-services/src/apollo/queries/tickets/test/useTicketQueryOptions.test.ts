import { renderHook } from '@testing-library/react-hooks';

import useTicketQueryOptions from '../useTicketQueryOptions';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from '../../datetimes/test/data';
import useInitDatetimeTestCache from '../../datetimes/test/useInitDatetimeTestCache';
import { getGuids } from '@eventespresso/predicates';
import { actWait } from '@eventespresso/utils/src/test';

describe('useTicketQueryOptions', () => {
	it('checks if the query operation variables are correct', async () => {
		const wrapper = ApolloMockedProvider();
		const { result } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useTicketQueryOptions();
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current.variables.where.datetimeIn).toEqual(getGuids(nodes).sort());
	});
});
