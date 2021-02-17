import type { EntityQueryArgs } from '../types';
import type { EntityEdge } from '../../types';

export interface User {
	id: string;
	description: string;
	email: string;
	capabilities: Array<string>;
	firstName: string;
	name: string;
	nicename: string;
	nickname: string;
	lastName: string;
	locale: string;
	username: string;
	__typename?: string;
}

export interface Viewer {
	viewer: User;
}

export interface UsersQueryWhereArgs {
	roleIn?: Array<string>;
}

export type UsersQueryArgs = EntityQueryArgs<UsersQueryWhereArgs>;

export interface UsersList {
	users: EntityEdge<User, 'RootQueryToUserConnectionWhereArgs'>;
}
