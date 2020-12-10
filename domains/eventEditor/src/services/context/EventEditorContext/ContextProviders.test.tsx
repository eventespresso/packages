import React from 'react';
import { useApolloClient } from '@eventespresso/data';
import { ApolloClient } from '@apollo/client';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';

import { useStatus } from '@eventespresso/services';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { actWait } from '@eventespresso/utils/src/test';

describe('ContextProviders', () => {
	it('checks for Apollo context without ContextProviders', async () => {
		const {
			result: { error },
		} = renderHook(() => useApolloClient());
		await actWait();

		expect(error).toBeInstanceOf(Error);
		expect(error.name).toEqual('Invariant Violation');
		expect(typeof error.stack).toEqual('string');
	});

	it('checks for Apollo context with ContextProviders', async () => {
		const { result } = renderHook(() => useApolloClient(), { wrapper: ApolloMockedProvider() });
		await actWait();

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

	it('checks for statusProvider context with ContextProviders', async () => {
		const { getByText } = render(<StatusComponent />, { wrapper: ApolloMockedProvider() });
		await actWait();
		expect(getByText('Status Manager is: NOT_NULL')).toBeInTheDocument();
	});
});
