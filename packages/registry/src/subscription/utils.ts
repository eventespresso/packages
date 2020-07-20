import { filter, pathEq } from 'ramda';
import { Subscriptions, SubscriptionManagerInterface } from './types';

export const filterSubscriptionsByOption = (
	getSubscriptions: SubscriptionManagerInterface['getSubscriptions'],
	option: string,
	value: unknown
): Subscriptions => {
	const isOptionEqual = pathEq(['options', option], value);
	return value ? filter(isOptionEqual, getSubscriptions()) : getSubscriptions();
};
