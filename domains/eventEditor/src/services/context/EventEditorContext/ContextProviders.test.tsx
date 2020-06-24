import React from 'react';
import { useApolloClient } from '@eventespresso/data';
import { ApolloClient } from 'apollo-client';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { InvariantError } from 'ts-invariant';
import '@testing-library/jest-dom/extend-expect';

import { useStatus } from '@eventespresso/services';
import { ApolloMockedProvider } from '../TestContext';

describe('ContextProviders', () => {
	it('checks for Apollo context without ContextProviders', () => {
		const { result } = renderHook(() => useApolloClient());

		expect(result.error).toBeInstanceOf(InvariantError);
	});

	it('checks for Apollo context with ContextProviders', () => {
		const { result } = renderHook(() => useApolloClient(), { wrapper: ApolloMockedProvider() });

		expect(result.current).toBeInstanceOf(ApolloClient);
	});

	const StatusComponent: React.FC = () => {
		const statusManager = useStatus();
		return <span>{`Status Manager is: ${statusManager === null ? 'NULL' : 'NOT_NULL'}`}</span>;
	};

	it('checks for statusProvider context without ContextProviders', () => {
		const { getByText } = render(<StatusComponent />);
		expect(getByText('Status Manager is: NULL')).toBeInTheDocument();
	});

	it('checks for statusProvider context with ContextProviders', () => {
		const { getByText } = render(<StatusComponent />, { wrapper: ApolloMockedProvider() });
		expect(getByText('Status Manager is: NOT_NULL')).toBeInTheDocument();
	});
});
