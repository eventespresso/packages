import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';

const graphqlEndpoint = window?.eventEspressoData?.api?.graphqlEndpoint || '';
const nonce = window?.eventEspressoData?.api?.restApiNonce || '';

export const cache = new InMemoryCache();

export const getClient = (): ApolloClient<NormalizedCacheObject> => {
	// add nonce only if exists
	const headers = nonce
		? {
				'X-WP-Nonce': nonce,
		  }
		: null;

	const link = new BatchHttpLink({
		uri: graphqlEndpoint || '/graphql',
		headers,
	});

	const client = new ApolloClient({
		cache,
		link,
	});

	return client;
};
