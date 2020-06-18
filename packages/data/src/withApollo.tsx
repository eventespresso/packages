import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { getClient } from './client';
import { AnyObject } from '@eventespresso/services';

const withApollo = <P extends AnyObject>(Component: React.ComponentType<P>): React.FC<P> => {
	const WrappedComponent: React.FC<P> = (props) => {
		return (
			<ApolloProvider client={getClient()}>
				<Component {...props} />
			</ApolloProvider>
		);
	};

	return WrappedComponent;
};

export default withApollo;
