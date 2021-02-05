import type { ApolloError } from '@apollo/client';

import { EventEmitter } from '@eventespresso/events';

/**
 * Event set emitted by data package
 */
export type EventSet = {
	'fetchSettings.error': (error: ApolloError) => void;
	'fetchUser.error': (error: ApolloError) => void;
};

export const events = new EventEmitter<EventSet>();
