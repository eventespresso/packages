import { renderHook } from '@testing-library/react-hooks';

import useFetchRecurrences from '../useFetchRecurrences';
import useRecurrenceQueryOptions from '../useRecurrenceQueryOptions';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { successMocks, errorMocks, nodes } from './data';
import useInitDatetimeTestCache from '@eventespresso/edtr-services/src/apollo/queries/datetimes/test/useInitDatetimeTestCache';
import { actWait } from '@eventespresso/utils/src/test';

const defaultQueryOptions = { skip: false };

describe('useFetchRecurrences', () => {
	it('checks for the error state', async () => {
		/* Set query options and the wrapper */
		const { result: queryResult } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useRecurrenceQueryOptions();
			},
			{
				wrapper: ApolloMockedProvider(),
			}
		);
		await actWait();

		const wrapper = ApolloMockedProvider(errorMocks.map((mock) => ({ ...mock, request: queryResult.current })));
		/* Set query options and the wrapper */

		const { result } = renderHook(
			() => {
				return useFetchRecurrences(defaultQueryOptions);
			},
			{
				wrapper,
			}
		);

		expect(result.current.error).toBeUndefined();
		expect(result.current.data).toBeUndefined();

		await actWait();

		expect(result.current.error).toBeDefined();
		expect(result.current.data).toBeUndefined();
	});

	it('checks for the loading state', async () => {
		/* Set query options and the wrapper */
		const { result: queryResult } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useRecurrenceQueryOptions();
			},
			{
				wrapper: ApolloMockedProvider(),
			}
		);
		await actWait();

		const wrapper = ApolloMockedProvider(successMocks.map((mock) => ({ ...mock, request: queryResult.current })));
		/* Set query options and the wrapper */

		const { result } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useFetchRecurrences(defaultQueryOptions);
			},
			{
				wrapper,
			}
		);

		expect(result.current.loading).toBe(true);

		await actWait();

		expect(result.current.loading).toBe(false);
	});

	it('checks for the response data', async () => {
		/* Set query options and the wrapper */
		const { result: queryResult } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useRecurrenceQueryOptions();
			},
			{
				wrapper: ApolloMockedProvider(),
			}
		);
		await actWait();

		const wrapper = ApolloMockedProvider(successMocks.map((mock) => ({ ...mock, request: queryResult.current })));
		/* Set query options and the wrapper */

		const { result } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useFetchRecurrences(defaultQueryOptions);
			},
			{
				wrapper,
			}
		);

		expect(result.current.error).toBeUndefined();
		expect(result.current.data).toBeUndefined();

		await actWait();

		// Data is already written above
		expect(result.current.data).toBeDefined();
		expect(result.current.error).toBeUndefined();
	});

	it('checks for the entries in response data', async () => {
		/* Set query options and the wrapper */
		const { result: queryResult } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useRecurrenceQueryOptions();
			},
			{
				wrapper: ApolloMockedProvider(),
			}
		);

		await actWait();

		const wrapper = ApolloMockedProvider(successMocks.map((mock) => ({ ...mock, request: queryResult.current })));
		/* Set query options and the wrapper */

		const { result } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useFetchRecurrences(defaultQueryOptions);
			},
			{
				wrapper,
			}
		);

		await actWait();

		expect(result.current.data).toHaveProperty('espressoRecurrences');

		// has nodes
		expect(result.current.data.espressoRecurrences).toHaveProperty('nodes');

		// nodes is an array with `length` property
		expect(result.current.data.espressoRecurrences.nodes).toHaveProperty('length');

		// `nodes` length is positive
		expect(result.current.data.espressoRecurrences.nodes.length).toEqual(nodes.length);

		// nodes from cache are same as written to cache
		expect(result.current.data.espressoRecurrences.nodes).toEqual(nodes);

		// the id of first entity is same
		expect(result.current.data.espressoRecurrences.nodes[0].id).toEqual(nodes[0].id);
	});
});
