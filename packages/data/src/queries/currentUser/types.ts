import type { EntityQueryArgs } from '../types';
import type { Entity, EntityEdge } from '../../types';

export interface User extends Entity {
	description: string;
	email: string;
	/* EE capabilities for the user */
	capabilities?: Array<string>;
	firstName: string;
	name: string;
	nicename: string;
	nickname: string;
	lastName: string;
	locale: string;
	username: string;
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
