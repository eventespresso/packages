import { renderHook } from '@testing-library/react-hooks';

import useEvent from '../useEvent';
import { ApolloMockedProvider } from '../../../../context/test';
import { successMocks, nodes } from './data';
import useEventQueryOptions from '../useEventQueryOptions';
import { actWait } from '@eventespresso/utils/src/test';

const mockEvent = nodes[0];

describe('useEvent', () => {
	it('returns undefined when the given eventdoes not exist', async () => {
		const wrapper = ApolloMockedProvider();
		const { result } = renderHook(() => useEvent(), {
			wrapper,
		});
		await actWait();

		expect(result.current).toBeUndefined();
	});

	it('checks for response data', async () => {
		/* Set query options and the wrapper */
		const {
			result: { current: request },
		} = renderHook(() => useEventQueryOptions(), {
			wrapper: ApolloMockedProvider(),
		});
		await actWait();

		const wrapper = ApolloMockedProvider(successMocks.map((mock) => ({ ...mock, request })));
		/* Set query options and the wrapper */
		const { result } = renderHook(() => useEvent(), {
			wrapper,
		});
		await actWait();

		expect(result.current).toBeDefined();
		expect(result.current.id).toBe(mockEvent.id);
		expect(result.current.dbId).toBe(mockEvent.dbId);
	});
});
