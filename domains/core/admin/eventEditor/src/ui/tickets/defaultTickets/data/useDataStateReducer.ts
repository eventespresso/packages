import { useCallback } from 'react';
import { assocPath, omit, path } from 'ramda';

import { uuid } from '@eventespresso/utils';

import { DataStateReducer, StateInitializer, DataState, DefaultTicket } from './types';

export const initialState: DataState = {
	deletedTickets: [],
	tickets: {},
	isDirty: false,
};

const useDataStateReducer = (initializer: StateInitializer): DataStateReducer => {
	return useCallback<DataStateReducer>(
		(state, action) => {
			const { id, ticket, type } = action;
			let ticketId: string, newState: DataState, existingTicket: DefaultTicket;

			switch (type) {
				case 'ADD_TICKET':
				case 'UPDATE_TICKET':
					// use id to update and uuid to add new
					ticketId = id || uuid();
					existingTicket = path(['tickets', ticketId], state);
					// we need to make the id inside ticket and in tickets object same
					newState = assocPath(
						['tickets', ticketId],
						{
							...existingTicket,
							...ticket,
							id: ticketId,
							isModified: Boolean(id),
							isDefault: true,
						},
						state
					);
					break;

				case 'DELETE_TICKET':
					newState = {
						...state,
						tickets: omit([id], state.tickets),
					};
					break;

				case 'ADD_TICKET_TO_DELETED':
					if (state.deletedTickets.includes(id)) {
						newState = state;
					} else {
						newState = {
							...state,
							deletedTickets: [...state.deletedTickets, id],
						};
					}
					break;

				case 'RESET':
					return initializer(initialState);
				default:
					throw new Error('Unexpected action');
			}

			return { ...newState, isDirty: true };
		},
		[initializer]
	);
};

export default useDataStateReducer;
