import { useMemo } from 'react';
import {
	Currency,
	CurrencyProps,
	CurrentUserProps,
	DateTimeFormats,
	DateTimeFormatsProps,
	Locale,
	LocaleProps,
	SiteUrl,
	SiteUrlProps,
	Timezone,
	TimezoneProps,
	ConfigDataProps,
} from './';
import { ApiDomData, ConfigDomData } from '../types';
import { useMemoStringify } from '@eventespresso/hooks';

export const useConfigData = (): ConfigDataProps => {
	const api: ApiDomData = useMemoStringify(window?.eventEspressoData?.api);
	const config: ConfigDomData = useMemoStringify(window?.eventEspressoData?.config);
	return useMemo(
		() => ({
			brandName: config?.coreDomain?.brandName || 'Event Espresso',
			currency: Currency(config?.siteCurrency as CurrencyProps),
			currentUser: config?.currentUser as CurrentUserProps,
			generalSettings: config?.generalSettings,
			dateTimeFormats: DateTimeFormats({
				dateFormat: config?.generalSettings?.dateFormat,
				timeFormat: config?.generalSettings?.timeFormat,
			} as DateTimeFormatsProps),
			locale: Locale({
				site: config?.locale?.site || '',
				siteTimezone: config?.locale?.siteTimezone || {},
				user: config?.locale?.user || '',
			} as LocaleProps),
			nonce: api?.restApiNonce || '',
			siteUrl: SiteUrl({
				admin: config?.siteUrls?.admin || '',
				home: config?.siteUrls?.home || '',
			} as SiteUrlProps),
			timezone: Timezone({
				city: config?.locale?.siteTimezone?.city || '',
				name: config?.locale?.siteTimezone?.name || '',
				offset: config?.locale?.siteTimezone?.offset || 0,
			} as TimezoneProps),
			wp_debug: config?.wp_debug || false,
		}),
		[
			api?.restApiNonce,
			config?.coreDomain?.brandName,
			config?.currentUser,
			config?.generalSettings,
			config?.locale?.site,
			config?.locale?.siteTimezone,
			config?.locale?.user,
			config?.siteCurrency,
			config?.siteUrls?.admin,
			config?.siteUrls?.home,
			config?.wp_debug,
		]
	);
};
