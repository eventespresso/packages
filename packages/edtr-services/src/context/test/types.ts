import type { MockedResponse as ApolloMockedResponse } from '@apollo/client/testing';
import type { ResultFunction } from '@apollo/client/utilities/testing/mocking/mockLink';
import type { ExecutionResult } from 'graphql';

export interface MockedResponse extends ApolloMockedResponse {
	result?: ExecutionResult;
	newData?: ResultFunction<ExecutionResult>;
}
