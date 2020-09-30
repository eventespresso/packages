import type { QueryHookOptions } from '@apollo/react-hooks';
import type { DocumentNode } from 'graphql';
import type { OperationVariables } from 'apollo-client';
import type { DataProxy } from 'apollo-cache';
import type { ApolloError } from 'apollo-client';

export interface EntityQueryArgs<WhereArgs> {
	after?: string;
	before?: string;
	first?: number;
	last?: number;
	where?: WhereArgs;
}

export interface CacheQueryOptions<TData = any, TVariables = OperationVariables>
	extends QueryHookOptions<TData, TVariables> {
	query: DocumentNode;
}

export type Order = 'ASC' | 'DESC';

type EntityQueryOrderByItem<Field> = {
	field: Field;
	order: Order;
};

export type EntityQueryOrderBy<Field> = Array<EntityQueryOrderByItem<Field>>;

export interface FetchQueryResult<Data> {
	data: Data;
	error?: ApolloError;
	loading: boolean;
}

export type CacheUpdaterFn<TData = any> = (writeOptions?: WriteQueryOptions<TData>) => void;

export type WriteQueryOptions<TData = any, TVariables = OperationVariables> = DataProxy.WriteQueryOptions<
	TData,
	TVariables
>;
