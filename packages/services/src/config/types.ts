import type { User } from '@eventespresso/data';

import type { Capability } from '../permissions';

export type JsDataProps = {
	brandName: string;
	currency_config: CurrencyProps;
	eejs_api_nonce: string;
	locale: JsDataLocaleProps;
	paths: JsDataPathsProps;
	default_timezone: JsDataTimezoneProps;
};

type JsDataLocaleProps = {
	user: string;
	site: string;
};

type JsDataPathsProps = {
	admin_url: string;
	site_url: string;
};

type JsDataTimezoneProps = {
	pretty: string;
	string: string;
	offset: number;
};

export type ConfigDataProps = {
	brandName: string;
	currency: CurrencyProps;
	currentUser: User;
	dateTimeFormats: DateTimeFormatsProps;
	generalSettings: GeneralSettings;
	locale: LocaleProps;
	nonce: string;
	/* Permission for the whole site */
	sitePermissions?: Array<Capability>;
	siteUrl: SiteUrlProps;
	timezone: TimezoneProps;
	wp_debug: boolean;
};
export interface CurrencyProps {
	code: string;
	singularLabel: string;
	pluralLabel: string;
	sign: string;
	signB4: boolean;
	decimalPlaces: number;
	decimalMark: string;
	thousandsSeparator: string;
	subunits?: number;
}

export interface GeneralSettingsData {
	generalSettings: GeneralSettings;
}

export interface GeneralSettings {
	dateFormat: string;
	timeFormat: string;
	timezone: string;
}

export interface DateTimeFormatsProps {
	dateFormat: string;
	timeFormat: string;
	dateTimeFormat?: string;
}

export interface LocaleProps {
	user: string;
	site: string;
}

export interface SiteUrlProps {
	admin: string;
	home: string;
}

export interface TimezoneProps {
	city: string;
	name: string;
	offset: number;
}
