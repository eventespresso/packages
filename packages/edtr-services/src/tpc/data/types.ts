import type { Reducer, ReducerState } from 'react';

import type { EntityId } from '@eventespresso/data';
import type { Ticket } from '../../apollo/types';
import type { BaseTPCProps, TPCPriceModifier } from '../types';

export interface TPCDataState extends Prices {
	ticket: Partial<Ticket>;
	deletedPrices: Array<EntityId>;
	isDirty: boolean;
}

export type DataActionType =
	| 'ADD_PRICE'
	| 'ADD_PRICE_TO_DELETED'
	| 'DELETE_PRICE'
	| 'RESET'
	| 'SET_PRICES'
	| 'TOGGLE_CALC_DIR'
	| 'UPDATE_PRICE'
	| 'UPDATE_TICKET_PRICE';

export interface DataAction extends Partial<TPCDataState>, Partial<UpdatePriceArgs> {
	type: DataActionType;
	ticketPrice?: Ticket['price'];
	price?: TPCPriceModifier;
	index?: number;
}

export type TPCDataStateManagerHook = (props: BaseTPCProps) => TPCDataStateManager;

interface UpdatePriceArgs {
	id: EntityId;
	fieldValues: Partial<TPCPriceModifier>;
}

export interface TPCDataStateManager extends TPCDataState {
	addPrice: (price: TPCPriceModifier, index?: number) => void;
	deletePrice: (id: EntityId, isNewOrDefault?: boolean) => void;
	getData: () => TPCDataState;
	reset: VoidFunction;
	reverseCalculate: boolean;
	setPrices: (prices: TPCDataState['prices']) => void;
	toggleCalcDir: VoidFunction;
	updatePrice: (args: UpdatePriceArgs) => void;
	updateTicketPrice: (ticketPrice: Ticket['price']) => void;
}

export type DataStateReducer = Reducer<TPCDataState, DataAction>;

export interface Prices {
	prices: Array<TPCPriceModifier>;
}

export type StateInitializer = (arg: TPCDataState) => ReducerState<DataStateReducer>;
