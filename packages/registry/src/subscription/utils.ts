import { filter, pathEq } from 'ramda';
import { Subscriptions, SubscriptionService } from './types';

export const filterSubscriptionsByOption = (
	getSubscriptions: SubscriptionService['getSubscriptions'],
	option: string,
	value: unknown
): Subscriptions => {
	const isOptionEqual = pathEq(['options', option], value);
	return value ? filter(isOptionEqual, getSubscriptions()) : getSubscriptions();
};
