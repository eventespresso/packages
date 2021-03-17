/**
 * Internal dependencies
 */
import { switchUserToAdmin } from './switch-user-to-admin';
import { switchUserToTest } from './switch-user-to-test';
import { visitAdminPage } from './visit-admin-page';

/**
 * Deactivates an active plugin.
 *
 * @param {string} slug Plugin slug.
 */
export async function deactivatePlugin(slug) {
	await switchUserToAdmin();
	await visitAdminPage('plugins.php');

	// const deleteLink = await page.$eval(`tr[data-slug="${slug}"] .delete a`, (el) => el?.innerHTML);

	// if (deleteLink) {
	// 	await switchUserToTest();
	// 	return;
	// }

	await page.click(`tr[data-slug="${slug}"] .deactivate a`).catch(console.log);

	await switchUserToTest();
}
