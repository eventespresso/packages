/* eslint-disable @wordpress/i18n-no-variables */
/* eslint-disable @wordpress/i18n-text-domain */
// import global types.
import '../../../types';
import { createI18n } from '@wordpress/i18n';

const i18nData = window?.eventEspressoData?.i18n;
export const TEXT_DOMAIN = 'event_espresso';

// create i18n instance with translation data and text domain
const i18n = createI18n(i18nData, TEXT_DOMAIN);

export const { setLocaleData, isRTL } = i18n;

export const __ = (text: string): string => {
	return i18n.__(text, TEXT_DOMAIN);
};

export const _n = (single: string, plural: string, number: number): string => {
	return i18n._n(single, plural, number, TEXT_DOMAIN);
};

export const _nx = (single: string, plural: string, number: number, context: string): string => {
	return i18n._nx(single, plural, number, context, TEXT_DOMAIN);
};

export const _x = (single: string, context: string): string => {
	return i18n._x(single, context, TEXT_DOMAIN);
};

export { sprintf } from '@wordpress/i18n';
