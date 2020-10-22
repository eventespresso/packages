import type { Reducer } from 'react';

import type { EntityId } from '@eventespresso/data';

export type BasicSortBy = 'name' | 'id';

export interface EdtrState {
	isRehydrated: boolean;
	visibleDatetimeIds: Array<EntityId>;
	visibleTicketIds: Array<EntityId>;
	pricesPollInterval: number; // interval in ms at which the prices should be refetched
}

export type EdtrActionType =
	| 'SET_IS_REHYDRATED'
	| 'SET_VISIBLE_DATETIME_IDS'
	| 'SET_VISIBLE_TICKET_IDS'
	| 'SET_PRICES_POLL_INTERVAL';

export interface EdtrAction extends Partial<EdtrState> {
	type: EdtrActionType;
}

export interface EdtrStateManager extends EdtrState {
	getState: () => EdtrState;
	setIsRehydrated: (isRehydrated: boolean) => void;
	setVisibleDatetimeIds: (visibleDatetimeIds: Array<EntityId>) => void;
	setVisibleTicketIds: (visibleTicketIds: Array<EntityId>) => void;
	setPricesPollInterval: (interval: number) => void;
}

export type EdtrStateReducer = Reducer<EdtrState, EdtrAction>;
