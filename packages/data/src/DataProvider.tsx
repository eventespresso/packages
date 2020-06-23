import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { getClient } from './client';

export const DataProvider: React.FC = ({ children }) => {
	const client = getClient();
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
