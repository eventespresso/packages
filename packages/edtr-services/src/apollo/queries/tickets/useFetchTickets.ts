import { useEffect, useRef, useMemo } from 'react';
import { useQuery } from '@eventespresso/data';
import { __ } from '@wordpress/i18n';

import { useStatus, TypeName } from '@eventespresso/services';
import { useSystemNotifications } from '@eventespresso/toaster';
import useTicketQueryOptions from './useTicketQueryOptions';
import { FetchQueryResult } from '@eventespresso/data';
import type { TicketsList } from '../../types';

const useFetchTickets = (skipFetch: boolean = null): FetchQueryResult<TicketsList> => {
	const { setIsLoading, setIsLoaded, setIsError, isLoaded } = useStatus();
	const { query, ...options } = useTicketQueryOptions();

	const { datetimeIn } = options.variables.where;
	// do not fetch if we don't have any datetimes
	// or tickets have already been fetched
	const skip = skipFetch !== null ? skipFetch : !datetimeIn.length || isLoaded(TypeName.tickets);

	const toaster = useSystemNotifications();
	const toastId = useRef(null);

	const dismissLoading: VoidFunction = () => toaster.dismiss(toastId.current);

	const { loading, ...result } = useQuery<TicketsList>(query, {
		...options,
		skip,
		onCompleted: (): void => {
			setIsLoaded(TypeName.tickets, true);
			dismissLoading();
			toaster.success({ message: __('tickets initialized') });
		},
		onError: (error): void => {
			setIsError(TypeName.tickets, true);
			dismissLoading();
			toaster.error({ message: error.message });
		},
	});

	useEffect(() => {
		if (loading) {
			toastId.current = toaster.loading({ message: __('initializing tickets') });
		}

		setIsLoading(TypeName.tickets, loading);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	return useMemo(
		() => ({
			...result,
			loading,
		}),
		[loading, result]
	);
};

export default useFetchTickets;
