/**
 * Internal dependencies
 */
import { switchUserToAdmin } from './switch-user-to-admin';
import { switchUserToTest } from './switch-user-to-test';
import { visitAdminPage } from './visit-admin-page';

/**
 * Deactivates an active plugin.
 *
 * @param {string} plugin Path to the plugin file, relative to the plugins directory.
 */
export async function deactivatePlugin(plugin) {
	await switchUserToAdmin();
	await visitAdminPage('plugins.php');

	// const deleteLink = await page.$eval(`tr[data-slug="${slug}"] .delete a`, (el) => el?.innerHTML);

	// if (deleteLink) {
	// 	await switchUserToTest();
	// 	return;
	// }

	try {
		await page.click(`tr[data-plugin="${plugin}"] .deactivate a`);
		console.log(`Deactivated plugin "${plugin}".`);
	} catch (error) {
		console.log(`Could not deactivate the plugin "${plugin}". May be it's already deactivated.`);
	}

	await switchUserToTest();
}
