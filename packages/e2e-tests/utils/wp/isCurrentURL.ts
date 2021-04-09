import { createURL } from './createURL';

/**
 * Checks if current URL is a WordPress path.
 *
 * @param {string} WPPath String to be serialized as pathname.
 * @param {?string} query String to be serialized as query portion of URL.
 * @return {boolean} Boolean represents whether current URL is or not a WordPress path.
 */
export function isCurrentURL(WPPath: string, query = ''): boolean {
	const currentURL = new URL(page.url());

	currentURL.search = query;

	return createURL(WPPath, query) === currentURL.href;
}
