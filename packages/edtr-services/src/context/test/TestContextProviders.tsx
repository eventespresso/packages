import { MockedProvider } from '@apollo/client/testing';

import { cache } from '@eventespresso/data';

import { ServiceProvider } from '../ContextProvider';
import { useDomTestData, useResetApolloCache, useSetGlobalStatusFlags, useSetRelationalData } from './';
import type { MockedResponse } from './types';

/**
 * A top level provider wrapped by Apollo MockedProvider.
 *
 * @param {mocks} The mocked responses for Apollo
 * @param {addServiceProviders} Whether to add service contexts. Pass false to test in isolation
 * @returns {React.FC} The provider component
 */
export const ApolloMockedProvider = (
	mocks: ReadonlyArray<MockedResponse> = [],
	addServiceProviders = true
): React.FC => {
	const Provider: React.FC = ({ children }) => {
		return (
			<MockedProvider mocks={mocks} cache={cache}>
				{addServiceProviders ? <ApolloAwareWrapper>{children}</ApolloAwareWrapper> : <>{children}</>}
			</MockedProvider>
		);
	};
	return Provider;
};

/**
 * A mid level provider wrapped by ServiceProvider.
 * It sets the DOM data and handles Apollo cache reset.
 *
 * @param {ReactElement} children The element that should be wrapped.
 * @returns {ReactElement} The wrapped element.
 */
export const ApolloAwareWrapper: React.FC = ({ children }) => {
	// initialize DOM data
	useDomTestData();
	// clear Apollo cache on unmount
	useResetApolloCache();
	return (
		<ServiceProvider>
			<ContextAwareWrapper>{children}</ContextAwareWrapper>
		</ServiceProvider>
	);
};

/**
 * A bottom level provider that's aware of all the contexts.
 * Takes care of the operations that need contexts.
 *
 * @param {ReactElement} children The element that should be wrapped.
 * @returns {ReactElement} The wrapped element.
 */
export const ContextAwareWrapper: React.FC = ({ children }) => {
	useSetGlobalStatusFlags();
	useSetRelationalData();
	return <>{children}</>;
};
