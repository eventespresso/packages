import { useCallback, useEffect, useMemo, useRef } from 'react';
import { __ } from '@eventespresso/i18n';

import { useSystemNotifications } from '@eventespresso/toaster';
import { FetchQueryResult, QueryHookOptions, useQuery } from '@eventespresso/data';
import { useStatus, TypeName } from '@eventespresso/services';

import useRecurrenceQueryOptions, { RecurrencesQueryOptions } from './useRecurrenceQueryOptions';
import type { RecurrencesList } from '../../types';

const useFetchRecurrences = (queryOptions?: Partial<RecurrencesQueryOptions>): FetchQueryResult<RecurrencesList> => {
	const { query, ...options } = useRecurrenceQueryOptions();
	const { isLoaded } = useStatus();

	const skip = isLoaded(TypeName.recurrence);

	const toaster = useSystemNotifications();
	const toastId = useRef(null);

	const dismissLoading = useCallback(() => toaster.dismiss(toastId.current), [toaster]);

	const newQueryOptions = useMemo<QueryHookOptions>(
		() => ({
			skip,
			...options,
			...queryOptions, // priority to passed options
			onCompleted: (): void => {
				dismissLoading();
				toastId.current = toaster.success({ message: __('recurrences initialized') });
			},
			onError: (error): void => {
				dismissLoading();
				toaster.error({ message: error.message });
			},
		}),
		[dismissLoading, options, queryOptions, skip, toaster]
	);

	const result = useQuery<RecurrencesList>(query, newQueryOptions);

	useEffect(() => {
		if (result.loading) {
			toastId.current = toaster.loading({ message: __('initializing recurrences') });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [result.loading]);

	return result;
};

export default useFetchRecurrences;
