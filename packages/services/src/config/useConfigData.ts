import { Currency, CurrentUser, DateTimeFormats, Locale, SiteUrl, Timezone } from './';
import type {
  ConfigDataProps,
  CurrencyProps,
  CurrentUserProps,
  DateTimeFormatsProps,
  LocaleProps,
  SiteUrlProps,
  TimezoneProps,
} from './types';

export const useConfigData = (): ConfigDataProps => {
  const data = window?.eejsdata?.data;

  return {
    brandName: data?.brandName || 'Event Espresso',
    currency: Currency(data?.currency_config as CurrencyProps),
    currentUser: CurrentUser({} as CurrentUserProps),
    generalSettings: null,
    dateTimeFormats: DateTimeFormats({} as DateTimeFormatsProps),
    locale: Locale({
      user: data?.locale?.user || '',
      site: data?.locale?.site || '',
    } as LocaleProps),
    nonce: data?.eejs_api_nonce || '',
    siteUrl: SiteUrl({
      admin: data?.paths?.admin_url || '',
      home: data?.paths?.site_url || '',
    } as SiteUrlProps),
    timezone: Timezone({
      city: data?.default_timezone?.pretty || '',
      name: data?.default_timezone?.string || '',
      offset: data?.default_timezone?.offset || 0,
    } as TimezoneProps),
  };
};
