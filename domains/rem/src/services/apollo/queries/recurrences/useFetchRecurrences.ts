import { useEffect, useRef } from 'react';
import { __ } from '@wordpress/i18n';

import { useSystemNotifications } from '@eventespresso/toaster';
import useRecurrenceQueryOptions, { RecurrencesQueryOptions } from './useRecurrenceQueryOptions';
import { FetchQueryResult, useQuery } from '@eventespresso/data';
import type { RecurrencesList } from '../../types';

const useFetchRecurrences = (queryOptions?: Partial<RecurrencesQueryOptions>): FetchQueryResult<RecurrencesList> => {
	const { query, ...options } = useRecurrenceQueryOptions();

	const toaster = useSystemNotifications();
	const toastId = useRef(null);

	const dismissLoading = (): void => toaster.dismiss(toastId.current);

	const { loading, ...result } = useQuery<RecurrencesList>(query, {
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
	});

	useEffect(() => {
		if (loading) {
			toastId.current = toaster.loading({ message: __('initializing recurrences') });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	return {
		...result,
		loading,
	};
};

export default useFetchRecurrences;
