import { useEffect } from 'react';

import useCacheRehydrationData from './useCacheRehydrationData';
import { useStatus, TypeName, useRelations } from '@eventespresso/services';
import { useUpdateDatetimeList, useUpdatePriceList, useUpdatePriceTypeList, useUpdateTicketList } from '../../hooks';
import {
	DEFAULT_DATETIME_LIST_DATA,
	DEFAULT_TICKET_LIST_DATA,
	DEFAULT_PRICE_LIST_DATA,
	DEFAULT_PRICE_TYPE_LIST_DATA,
	useDatetimeQueryOptions,
	useEventQueryOptions,
	usePriceQueryOptions,
	usePriceTypeQueryOptions,
	useTicketQueryOptions,
} from '../queries';
import {
	useCurrentUserQueryOptions,
	useGeneralSettingsQueryOptions,
	useUpdateCache,
	useUpdateCurrentUserCache,
	useUpdateGeneralSettingsCache,
} from '@eventespresso/data';
import { getGuids } from '@eventespresso/predicates';

const useCacheRehydration = (): void => {
	const { initialize: initializeRelations, isInitialized: relationsInitialized } = useRelations();
	const { currentUser, eventEditor, generalSettings } = useCacheRehydrationData();
	const { isLoaded } = useStatus();

	const {
		event,
		datetimes: espressoDatetimes = DEFAULT_DATETIME_LIST_DATA,
		tickets: espressoTickets = DEFAULT_TICKET_LIST_DATA,
		prices: espressoPrices = DEFAULT_PRICE_LIST_DATA,
		priceTypes: espressoPriceTypes = DEFAULT_PRICE_TYPE_LIST_DATA,
		relations,
	} = eventEditor;

	const datetimeIn = getGuids(espressoDatetimes?.nodes || []);
	const ticketIn = getGuids(espressoTickets?.nodes || []);

	const priceTypeQueryOptions = usePriceTypeQueryOptions();
	const updatePriceTypeList = useUpdatePriceTypeList();

	const datetimeQueryOptions = useDatetimeQueryOptions();
	const updateDatetimeList = useUpdateDatetimeList();

	const ticketQueryOptions = useTicketQueryOptions(datetimeIn);
	const updateTicketList = useUpdateTicketList();

	const priceQueryOptions = usePriceQueryOptions(ticketIn);
	const updatePriceList = useUpdatePriceList();

	const currentUserQueryOptions = useCurrentUserQueryOptions();
	const updateCurrentUser = useUpdateCurrentUserCache();

	const generalSettingsQueryOptions = useGeneralSettingsQueryOptions();
	const updateGeneralSettings = useUpdateGeneralSettingsCache();

	const eventQueryOptions = useEventQueryOptions();
	const updateCache = useUpdateCache();

	useEffect(() => {
		if (!relationsInitialized()) {
			/* Rehydrate relations */
			initializeRelations(relations);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [relations]);

	if (isLoaded(TypeName.priceTypes)) {
		return;
	}

	/* Rehydrate event data */
	updateCache({
		...eventQueryOptions,
		data: {
			espressoEvent: event,
		},
	});

	/* Rehydrate price types */
	updatePriceTypeList({
		...priceTypeQueryOptions,
		data: {
			espressoPriceTypes,
		},
	});

	/* Rehydrate datetimes */
	updateDatetimeList({
		...datetimeQueryOptions,
		data: {
			espressoDatetimes,
		},
	});

	/* Rehydrate tickets */
	updateTicketList({
		...ticketQueryOptions,
		data: {
			espressoTickets,
		},
	});

	/* Rehydrate prices */
	updatePriceList({
		...priceQueryOptions,
		data: {
			espressoPrices,
		},
	});

	/* Rehydrate current user */
	updateCurrentUser({
		...currentUserQueryOptions,
		data: {
			viewer: currentUser,
		},
	});

	/* Rehydrate general settings */
	updateGeneralSettings({
		...generalSettingsQueryOptions,
		data: {
			generalSettings,
		},
	});
};

export default useCacheRehydration;
