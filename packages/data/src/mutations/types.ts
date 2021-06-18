import type { OperationVariables } from '@apollo/client';
import type { ExecutionResult } from 'graphql';

export interface MutationInput {
	[key: string]: any;
}

export enum MutationType {
	Create = 'CREATE',
	Update = 'UPDATE',
	Delete = 'DELETE',
}

export type MutationFunction<TData = any, TVariables = OperationVariables> = (
	input?: TVariables
) => Promise<ExecutionResult<TData>>;
