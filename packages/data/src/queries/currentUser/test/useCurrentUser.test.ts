import { renderHook } from '@testing-library/react-hooks';

import { useCurrentUser } from '..';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { currentUser, successMocks } from './data';
import useInitCurrentUserTestCache from './useInitCurrentUserTestCache';

describe('useCurrentUser', () => {
	it('checks for the current user when the cache is empty', async () => {
		const wrapper = ApolloMockedProvider([], false);
		const { result } = renderHook(() => useCurrentUser(), { wrapper });

		expect(result.current).toBe(undefined);
	});

	it('checks for the current user when the cache is NOT empty', async () => {
		const wrapper = ApolloMockedProvider(successMocks, false);
		const { result } = renderHook(
			() => {
				useInitCurrentUserTestCache();
				return useCurrentUser();
			},
			{ wrapper }
		);

		expect(result.current).toBeDefined();
	});

	it('checks for current user props', async () => {
		const wrapper = ApolloMockedProvider(successMocks, false);
		const { result } = renderHook(
			() => {
				useInitCurrentUserTestCache();
				return useCurrentUser();
			},
			{ wrapper }
		);

		const { current: cachedUser } = result;

		expect(cachedUser).toBeDefined();

		expect(cachedUser.id).toEqual(currentUser.id);

		expect(cachedUser.name).toEqual(currentUser.name);

		expect(cachedUser).toEqual(currentUser);
	});
});
