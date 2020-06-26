import { renderHook } from '@testing-library/react-hooks';

import useFetchGeneralSettings from '../useFetchGeneralSettings';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { successMocks, errorMocks, generalSettings } from './data';

const timeout = 5000; // milliseconds
describe('useFetchGeneralSettings', () => {
	it('checks for the error state', async () => {
		const wrapper = ApolloMockedProvider(errorMocks, false);

		const { result, waitForNextUpdate } = renderHook(() => useFetchGeneralSettings(), {
			wrapper,
		});

		expect(result.current.error).toBeDefined();
		expect(result.current.data).toBeDefined();

		await waitForNextUpdate({ timeout }); // wait for response

		expect(result.current.error).toBeDefined();
		expect(result.current.data).toBeUndefined();
	});

	it('checks for the loading state', async () => {
		const wrapper = ApolloMockedProvider(successMocks, false);

		const { result, waitForNextUpdate } = renderHook(() => useFetchGeneralSettings(), {
			wrapper,
		});

		expect(result.current.loading).toBe(true);

		await waitForNextUpdate({ timeout }); // wait for response

		expect(result.current.loading).toBe(false);
	});

	it('checks for the response data', async () => {
		const wrapper = ApolloMockedProvider(successMocks, false);

		const { result } = renderHook(() => useFetchGeneralSettings(), {
			wrapper,
		});

		// Data is already written above
		expect(result.current.data).toBeDefined();
		expect(result.current.error).toBeUndefined();
	});

	it('checks for the entries in response data', async () => {
		const wrapper = ApolloMockedProvider(successMocks, false);

		const { result } = renderHook(() => useFetchGeneralSettings(), {
			wrapper,
		});

		expect(result.current.data).toHaveProperty('generalSettings');

		expect(result.current.data.generalSettings).toHaveProperty('dateFormat');

		expect(result.current.data.generalSettings).toHaveProperty('timezone');

		expect(result.current.data.generalSettings.timezone).toBe(generalSettings.timezone);
	});
});
