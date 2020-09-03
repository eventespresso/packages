import { renderHook } from '@testing-library/react-hooks';

import useDatetimeQueryOptions from '../useDatetimeQueryOptions';
import { ApolloMockedProvider, eventId } from '../../../../context/test';
import { actWait } from '@eventespresso/utils/src/test';

describe('useDatetimeQueryOptions()', () => {
	it('checks if the query operation variables are correct', async () => {
		const wrapper = ApolloMockedProvider();
		const { result } = renderHook(() => useDatetimeQueryOptions(), { wrapper });
		await actWait();

		expect(result.current.variables.where.eventId).toEqual(eventId);
	});
});
