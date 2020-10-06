import { useEffect, useRef, useMemo, useCallback } from 'react';
import { QueryHookOptions, useQuery } from '@eventespresso/data';
import { __ } from '@eventespresso/i18n';

import { useStatus, TypeName } from '@eventespresso/services';
import { useSystemNotifications } from '@eventespresso/toaster';
import usePriceQueryOptions from './usePriceQueryOptions';
import type { FetchQueryResult } from '@eventespresso/data';
import { useEdtrState } from '../../../hooks';
import { usePrevious } from '@eventespresso/hooks';
import type { PricesList } from '../../types';

const useFetchPrices = (skipFetch: boolean = null): Partial<FetchQueryResult<PricesList>> => {
	const { setIsLoading, setIsLoaded, setIsError, isLoaded } = useStatus();
	const { query, ...options } = usePriceQueryOptions();
	const { pricesPollInterval: pollInterval } = useEdtrState();
	const prevPollInterval = usePrevious(pollInterval);

	const { ticketIn } = options.variables.where;
	// do not fetch if we don't have any tickets
	// or prices have already been fetched
	const skip = skipFetch !== null ? skipFetch : !ticketIn.length || isLoaded(TypeName.prices);

	const toaster = useSystemNotifications();
	const toastId = useRef(null);

	const dismissLoading = useCallback(() => toaster.dismiss(toastId.current), [toaster]);

	const queryOptions = useMemo<QueryHookOptions>(
		() => ({
			...options,
			skip,
			onCompleted: (): void => {
				setIsLoaded(TypeName.prices, true);
				dismissLoading();
				toaster.success({ message: __('prices initialized') });
			},
			onError: (error): void => {
				setIsError(TypeName.prices, true);
				dismissLoading();
				toaster.error({ message: error.message });
			},
		}),
		[dismissLoading, options, setIsError, setIsLoaded, skip, toaster]
	);

	const { data, error, loading, startPolling, stopPolling } = useQuery<PricesList>(query, queryOptions);

	useEffect(() => {
		// if poll interval has changed
		if (pollInterval !== prevPollInterval) {
			// if poll interval has been set/changed
			if (pollInterval > 0) {
				// first stop the polling
				stopPolling();
				// start polling with new/fresh value
				startPolling(pollInterval);
			} else {
				// Since poll interval has changed to falsy
				// We need to stop ponting our missiles towards the target
				stopPolling();
			}
		}
		// Make sure we don't leave any traces for our enemy after unmount
		return stopPolling;
	}, [pollInterval, prevPollInterval, startPolling, stopPolling]);

	useEffect(() => {
		if (loading) {
			toastId.current = toaster.loading({ message: __('initializing prices') });
		}

		setIsLoading(TypeName.prices, loading);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	return useMemo(
		() => ({
			data,
			error,
			loading,
		}),
		[data, error, loading]
	);
};

export default useFetchPrices;
