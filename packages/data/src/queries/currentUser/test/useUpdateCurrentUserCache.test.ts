import { useApolloClient } from '@apollo/react-hooks';
import { renderHook, act } from '@testing-library/react-hooks';

import { useCacheRehydration } from '@eventespresso/edtr-services';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import useUpdateCurrentUserCache from '../useUpdateCurrentUserCache';
import { useCurrentUser } from '..';
import { request } from './data';
import { actWait } from '@eventespresso/utils/src/test';

const timeout = 5000; // milliseconds
describe('useUpdateCurrentUserCache', () => {
	it('checks for currentUser cache update', async () => {
		const wrapper = ApolloMockedProvider();
		const { result, waitForNextUpdate } = renderHook(
			() => {
				useCacheRehydration();
				return {
					currentUser: useCurrentUser(),
					cacheUpdater: useUpdateCurrentUserCache(),
					client: useApolloClient(),
				};
			},
			{
				wrapper,
			}
		);
		await actWait();

		const currentUser = result.current.currentUser;
		const updatedUser = {
			...currentUser,
			id: currentUser.id + '-alpha',
			name: currentUser.name + '-alpha',
		};

		act(() => {
			result.current.cacheUpdater({
				...request,
				data: {
					viewer: updatedUser,
				},
			});
		});
		await waitForNextUpdate({ timeout });

		const cache = result.current.client.extract();
		const { result: cacheResult } = renderHook(
			() => {
				const client = useApolloClient();
				// restore the cache from previous render
				client.restore(cache);
				return useCurrentUser();
			},
			{
				wrapper,
			}
		);
		await actWait();

		const cachedCurrentUser = cacheResult.current;

		expect(cachedCurrentUser.id).toBe(updatedUser.id);

		expect(cachedCurrentUser.name).toBe(updatedUser.name);
	});
});
