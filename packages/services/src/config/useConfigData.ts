import { useMemo } from 'react';
import { Currency, DateTimeFormats, Locale, LocaleProps, SiteUrl, Timezone, ConfigDataProps } from './';

const api = window?.eventEspressoData?.api;
const config = window?.eventEspressoData?.config;

export const useConfigData = (): ConfigDataProps => {
	return useMemo(
		() => ({
			brandName: config?.coreDomain?.brandName || 'Event Espresso',
			currency: Currency(config?.siteCurrency),
			currentUser: config?.currentUser,
			generalSettings: config?.generalSettings,
			dateTimeFormats: DateTimeFormats({
				dateFormat: config?.generalSettings?.dateFormat,
				timeFormat: config?.generalSettings?.timeFormat,
			}),
			locale: Locale({
				site: config?.locale?.site || '',
				siteTimezone: config?.locale?.siteTimezone || {},
				user: config?.locale?.user || '',
			} as LocaleProps),
			nonce: api?.restApiNonce || '',
			sitePermissions: config?.sitePermissions || [],
			siteUrl: SiteUrl({
				admin: config?.siteUrls?.admin || '',
				home: config?.siteUrls?.home || '',
			}),
			timezone: Timezone({
				city: config?.locale?.siteTimezone?.city || '',
				name: config?.locale?.siteTimezone?.name || '',
				offset: config?.locale?.siteTimezone?.offset || 0,
			}),
			wp_debug: config?.wp_debug || false,
		}),
		[]
	);
};
