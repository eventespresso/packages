import { useEffect, useRef, useMemo, useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { useStatus, TypeName } from '@eventespresso/services';
import { useSystemNotifications } from '@eventespresso/toaster';
import useDatetimeQueryOptions from './useDatetimeQueryOptions';
import { useQuery } from '@eventespresso/data';
import type { FetchQueryResult, QueryHookOptions } from '@eventespresso/data';
import type { DatetimesList } from '../../types';

const useFetchDatetimes = (): FetchQueryResult<DatetimesList> => {
	const { setIsLoading, setIsLoaded, setIsError } = useStatus();
	const { query, ...options } = useDatetimeQueryOptions();

	const toaster = useSystemNotifications();
	const toastId = useRef(null);

	const dismissLoading = useCallback(() => toaster.dismiss(toastId.current), [toaster]);

	const queryOptions = useMemo<QueryHookOptions>(
		() => ({
			...options,
			onCompleted: (): void => {
				setIsLoaded(TypeName.datetimes, true);
				setIsLoading(TypeName.datetimes, false);
				dismissLoading();
				toastId.current = toaster.success({ message: __('datetimes initialized') });
			},
			onError: (error): void => {
				setIsError(TypeName.datetimes, true);
				setIsLoading(TypeName.datetimes, false);
				dismissLoading();
				toaster.error({ message: error.message });
			},
		}),
		[dismissLoading, options, setIsError, setIsLoaded, setIsLoading, toaster]
	);

	const { loading, ...result } = useQuery<DatetimesList>(query, queryOptions);

	useEffect(() => {
		if (loading) {
			toastId.current = toaster.loading({ message: __('initializing datetimes') });
		}

		setIsLoading(TypeName.datetimes, loading);

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

export default useFetchDatetimes;
