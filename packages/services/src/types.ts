import type { User } from '@eventespresso/data';
import type { AnyObject } from '@eventespresso/utils';

import type { CurrencyProps, GeneralSettings, SiteUrlProps } from './config/types';
import type { Capability } from './permissions';

export interface EventEspressoDomData {
	api: ApiDomData;
	config: ConfigDomData;
	readonly domain: string;
	eei18n: EspressoTranslations;
	i18n: I18nData;
}

export type ApiDomData = {
	graphqlEndpoint: string;
	restApiBaseUrl: string;
	restApiCollectionEndpoints: AnyObject<string>;
	restApiNonce: string;
	restApiPrimaryKeys: AnyObject<string | [string]>;
	restApiRouteUrl: string;
};

export type ConfigDomData = {
	coreDomain: CoreDomainDomData;
	currentUser: User;
	generalSettings: GeneralSettings;
	locale: LocaleDomData;
	siteCurrency: CurrencyProps;
	sitePermissions: Array<Capability>;
	siteUrls: SiteUrlProps;
	wp_debug: boolean;
};

export type CoreDomainDomData = {
	assetNamespace: string;
	brandName: string;
	coreVersion: string;
	distributionAssetsPath: string;
	distributionAssetsUrl: string;
	pluginPath: string;
	pluginUrl: string;
};

export interface EspressoTranslations {
	[key: string]: any; // translation strings
}

export interface I18nInfo {
	domain: string; // e.g. "event_espresso"
	lang: string; // e.g. "en_US"
	plural_forms?: string;
}

export type I18nData = {
	'': I18nInfo;
};

export interface LocaleDomData {
	user: string;
	siteTimezone: LocaleTimezoneDomData;
	site: string;
}

export interface LocaleTimezoneDomData {
	city: string;
	name: string;
	offset: number;
}
