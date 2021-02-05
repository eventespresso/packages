import { ApolloProvider } from '@apollo/client';

import { getClient } from './client';

export const DataProvider: React.FC = ({ children }) => {
	const client = getClient();
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
