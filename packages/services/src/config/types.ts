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
	currency: CurrencyProps;
	currentUser: CurrentUserProps;
	dateTimeFormats: DateTimeFormatsProps;
	generalSettings: GeneralSettings;
	locale: LocaleProps;
	nonce: string;
	siteUrl: SiteUrlProps;
	timezone: TimezoneProps;
	brandName: string;
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

export interface Viewer {
	viewer: CurrentUserProps;
}

export interface CurrentUserProps {
	id: string;
	databaseId: number;
	description: string;
	email: string;
	firstName: string;
	name: string;
	nicename: string;
	nickname: string;
	lastName: string;
	locale: string;
	username: string;
	__typename?: string;
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
