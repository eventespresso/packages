import { join } from 'path';

import { WP_BASE_URL } from '../dev/config';

/**
 * Creates new URL by parsing base URL, WPPath and query string.
 *
 */
export function createURL(WPPath: string, query = ''): string {
	const url = new URL(WP_BASE_URL);

	url.pathname = join(url.pathname, WPPath);
	url.search = query;

	return url.href;
}
