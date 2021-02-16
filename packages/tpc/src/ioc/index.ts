import { getHooks } from '@eventespresso/ioc';

import { TpcTicket } from '../data';
export type Actions = {};

export type Filters = {
	'tpc.ticket.isDisabled': [isDisabled: boolean, ticket: TpcTicket];
};

export const hooks = getHooks<Actions, Filters>();
