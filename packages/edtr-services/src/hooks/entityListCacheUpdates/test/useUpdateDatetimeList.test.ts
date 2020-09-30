import { useApolloClient } from '@eventespresso/data';
import { renderHook, act } from '@testing-library/react-hooks';

import { useCacheRehydration } from '../../../apollo/initialization';
import useUpdateDatetimeList from '../useUpdateDatetimeList';
import { useDatetimes, useDatetimeIds, useDatetimeQueryOptions } from '../../../apollo/queries';
import { ApolloMockedProvider } from '../../../context/test';
import { actWait } from '@eventespresso/utils/src/test';

describe('useUpdateDatetimeList', () => {
	it('checks for datetimes cache update', async () => {
		const wrapper = ApolloMockedProvider();
		const { result } = renderHook(
			() => {
				useCacheRehydration();
				return {
					queryOptions: useDatetimeQueryOptions(),
					datetimelist: useDatetimes(),
					cacheUpdater: useUpdateDatetimeList(),
					client: useApolloClient(),
				};
			},
			{
				wrapper,
			}
		);
		await actWait();

		const datetimelist = result.current.datetimelist;

		const datetime = { ...datetimelist[0], id: datetimelist[0].id + '-alpha' };

		// add datetime to the list.
		const nodes = [...datetimelist, datetime];

		act(() => {
			result.current.cacheUpdater({
				...result.current.queryOptions,
				data: {
					espressoDatetimes: {
						__typename: 'EspressoRootQueryDatetimesConnection',
						nodes,
					},
				},
			});
		});

		const cache = result.current.client.extract();
		const { result: cacheResult } = renderHook(
			() => {
				const client = useApolloClient();
				// restore the cache from previous render
				client.restore(cache);
				return useDatetimeIds();
			},
			{
				wrapper,
			}
		);
		await actWait();

		const cachedDatetimeIds = cacheResult.current;

		expect(cachedDatetimeIds.length).toBe(datetimelist.length + 1);

		expect(cachedDatetimeIds).toContain(datetime.id);
	});
});
