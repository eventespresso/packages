import { useEffect, useRef, useMemo } from 'react';
import { useQuery } from '@eventespresso/data';
import { __ } from '@eventespresso/i18n';

import usePriceTypeQueryOptions from './usePriceTypeQueryOptions';
import { useStatus, TypeName } from '@eventespresso/services';
import { useSystemNotifications } from '@eventespresso/toaster';
import { FetchQueryResult } from '@eventespresso/data';
import type { PriceTypesList } from '../../types';

const useFetchPriceTypes = (): FetchQueryResult<PriceTypesList> => {
	const { setIsLoading, setIsLoaded, setIsError } = useStatus();
	const { query, ...options } = usePriceTypeQueryOptions();

	const toaster = useSystemNotifications();
	const toastId = useRef(null);

	const dismissLoading = (): void => toaster.dismiss(toastId.current);

	const { loading, ...result } = useQuery<PriceTypesList>(query, {
		...options,
		onCompleted: (): void => {
			setIsLoaded(TypeName.priceTypes, true);
			dismissLoading();
			toaster.success({ message: __('price types initialized') });
		},
		onError: (error): void => {
			setIsError(TypeName.priceTypes, true);
			dismissLoading();
			toaster.error({ message: error.message });
		},
	});

	useEffect(() => {
		if (loading) {
			toastId.current = toaster.loading({ message: __('initializing  price types') });
		}

		setIsLoading(TypeName.priceTypes, loading);
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

export default useFetchPriceTypes;
