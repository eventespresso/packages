import { compose, applyTo, ifElse, map } from 'ramda';
import { v4 as uuid } from 'uuid';

import { TpcPriceModifier } from '../../types';
import defaultPrice from '../../defaultPriceModifier';

export const defaultModifer: TpcPriceModifier = { ...defaultPrice, priceType: '' };

export type PricePred = (price: TpcPriceModifier) => TpcPriceModifier;

export type PriceCreator = PricePred | Array<PricePred>;
export type TestPrice = TpcPriceModifier | Array<TpcPriceModifier>;

export type TestCase = {
	name: string;
	prices: Array<PriceCreator>;
	total: number; //expected total
	basePrice?: number; //expected base price
};

/**
 * Converts a price to base price and sets the amount
 */
export const createId: PricePred = (price) => {
	return { ...price, id: uuid() };
};

/**
 * Converts a price to base price and sets the amount
 */
export const basePrice = (amount?: number): PricePred => (price) => {
	return { ...price, isBasePrice: true, amount };
};

/**
 * Sets the price amount
 */
export const setAmount = (amount?: number): PricePred => (price) => {
	return { ...price, amount };
};

/**
 * Sets the price order
 */
export const setOrder = (order: number): PricePred => (price) => {
	return { ...price, order };
};

/**
 * Converts a price to percent discount
 */
export const toDiscount: PricePred = (price) => {
	return { ...price, isDiscount: true };
};

/**
 * Converts a price to percent surcharge
 */
export const toSurcharge: PricePred = (price) => {
	return { ...price, isDiscount: false };
};

/**
 * Converts a price to percent
 */
export const toPercent: PricePred = (price) => {
	return { ...price, isPercent: true };
};

/**
 * Converts a price to fixed (non-percent)
 */
export const toFixed: PricePred = (price) => {
	return { ...price, isPercent: false };
};

/**
 * Converts a price to tax
 */
export const toTaxed: PricePred = (price) => {
	return compose(toPercent, toSurcharge)({ ...price, isTax: true });
};

/**
 * Converts a price to percent discount
 */
export const percentDiscount = (amount?: number) => compose(toPercent, toDiscount, setAmount(amount));

/**
 * Converts a price to percent surcharge
 */
export const percentSurcharge = (amount?: number) => compose(toPercent, toSurcharge, setAmount(amount));

/**
 * Converts a price to fixed discount
 */
export const fixedDiscount = (amount?: number) => compose(toFixed, toDiscount, setAmount(amount));

/**
 * Converts a price to fixed surcharge
 */
export const fixedSurcharge = (amount?: number) => compose(toFixed, toSurcharge, setAmount(amount));

/**
 * Converts a price to tax
 */
export const tax = (amount?: number) => compose(toTaxed, setAmount(amount));

/**
 * Flattens an array of test prices in which the prices with same order
 * are in an array. It sets the correct order for all the prices
 */
export const createPrices = (testPrices: Array<TestPrice>): TpcPriceModifier[] => {
	return testPrices.reduce<TpcPriceModifier[]>((previousValue, priceOrArray, index) => {
		const order = index + 1;
		const convertPrice = compose(createId, setOrder(order));

		if (Array.isArray(priceOrArray)) {
			return [...previousValue, ...priceOrArray.map(convertPrice)];
		}

		return [...previousValue, convertPrice(priceOrArray)];
	}, []);
};

export const convertToModifier = ifElse(Array.isArray, map(applyTo(defaultModifer)), applyTo(defaultModifer));
