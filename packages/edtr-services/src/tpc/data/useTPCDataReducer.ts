import { useCallback } from 'react';
import { any, append, findIndex, insert, update } from 'ramda';

import { DataStateReducer, StateInitializer, TPCDataState } from './types';
import { entityHasGuid, isTax } from '@eventespresso/predicates';
import type { TPCPriceModifier } from '../types';

export const initialState: TPCDataState = {
	ticket: null,
	prices: [],
	deletedPrices: [],
	isDirty: false,
};

export const useTPCDataReducer = (initializer: StateInitializer): DataStateReducer => {
	return useCallback<DataStateReducer>(
		(state, action) => {
			const { type, id, index, fieldValues, ticketPrice, price, prices } = action;

			let isTaxable: boolean,
				newPrices: Array<TPCPriceModifier>,
				priceIndex: number,
				priceToUpdate: TPCPriceModifier,
				updatedPrice: TPCPriceModifier,
				retainedPrices: Array<TPCPriceModifier>,
				updatedPrices: Array<TPCPriceModifier>,
				newState: TPCDataState;

			switch (type) {
				case 'TOGGLE_CALC_DIR':
					newState = {
						...state,
						ticket: {
							...state.ticket,
							reverseCalculate: !state.ticket?.reverseCalculate,
						},
					};
					break;

				case 'UPDATE_TICKET_PRICE':
					isTaxable = any(isTax, state.prices);
					newState = {
						...state,
						ticket: {
							...state.ticket,
							price: ticketPrice,
							isTaxable,
						},
					};
					break;

				case 'SET_PRICES':
					newState = {
						...state,
						prices,
					};
					break;

				case 'ADD_PRICE':
					newPrices =
						typeof index !== 'undefined' ? insert(index, price, state.prices) : append(price, state.prices);
					newPrices = newPrices.map((newPrice, index) => {
						// order of base price is <= 1
						if (!newPrice.isBasePrice) {
							const order = (index + 1) * 10; // steps of 10, +1 to avoid 0 order
							return { ...newPrice, order };
						}
						return newPrice;
					});
					newState = {
						...state,
						prices: newPrices,
					};
					break;

				case 'UPDATE_PRICE':
					// find the index of the price to update
					priceIndex = findIndex(entityHasGuid(id), state.prices);
					// if price id does not exist
					if (priceIndex < 0) {
						return state;
					}
					// get the price object
					priceToUpdate = state.prices[priceIndex];

					// update the price object
					updatedPrice = { ...priceToUpdate, ...fieldValues, isModified: true };

					// update the prices list
					updatedPrices = update<typeof state.prices[0]>(priceIndex, updatedPrice, state.prices);
					isTaxable = any(isTax, updatedPrices);
					newState =
						priceIndex > -1
							? {
									...state,
									prices: updatedPrices,
									ticket: {
										...state.ticket,
										isTaxable,
									},
							  }
							: state;
					break;

				case 'DELETE_PRICE':
					retainedPrices = state.prices.filter(({ id: priceId }) => id !== priceId);
					isTaxable = any(isTax, retainedPrices);
					newState = {
						...state,
						prices: retainedPrices,
						ticket: {
							...state.ticket,
							isTaxable,
						},
					};
					break;

				case 'ADD_PRICE_TO_DELETED':
					if (state.deletedPrices.includes(id)) {
						newState = state;
					} else {
						newState = {
							...state,
							deletedPrices: [...state.deletedPrices, id],
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
