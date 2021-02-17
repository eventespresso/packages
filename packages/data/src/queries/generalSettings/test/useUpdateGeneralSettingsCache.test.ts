import { useApolloClient } from '@apollo/client';
import { renderHook, act } from '@testing-library/react-hooks';

import { useCacheRehydration } from '@eventespresso/edtr-services';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import useUpdateGeneralSettingsCache from '../useUpdateGeneralSettingsCache';
import { useGeneralSettings } from '..';
import { request } from './data';
import { actWait } from '@eventespresso/utils/src/test';

describe('useUpdateGeneralSettingsCache', () => {
	it('checks for generalSettings cache update', async () => {
		const wrapper = ApolloMockedProvider();
		const { result } = renderHook(
			() => {
				useCacheRehydration();
				return {
					generalSettings: useGeneralSettings(),
					cacheUpdater: useUpdateGeneralSettingsCache(),
					client: useApolloClient(),
				};
			},
			{
				wrapper,
			}
		);
		await actWait();

		const generalSettings = result.current.generalSettings;

		const updatedSettings = {
			...generalSettings,
			dateFormat: generalSettings.dateFormat + '-i',
			timeFormat: generalSettings.timeFormat + '-s',
		};

		act(() => {
			result.current.cacheUpdater({
				...request,
				data: {
					generalSettings: updatedSettings,
				},
			});
		});
		await actWait();

		const cache = result.current.client.extract();
		const { result: cacheResult } = renderHook(
			() => {
				const client = useApolloClient();
				// restore the cache from previous render
				client.restore(cache);
				return useGeneralSettings();
			},
			{
				wrapper,
			}
		);
		await actWait();

		const cachedGeneralSettings = cacheResult.current;

		expect(cachedGeneralSettings.timeFormat).toBe(updatedSettings.timeFormat);

		expect(cachedGeneralSettings.dateFormat).toBe(updatedSettings.dateFormat);
	});
});
