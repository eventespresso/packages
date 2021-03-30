/**
 * Internal dependencies
 */
import { isPluginNetworkActive } from './isPluginNetworkActive';
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

	if (await isPluginNetworkActive(plugin)) {
		console.log(`Plugin "${plugin}" is network active.`);
	} else {
		try {
			await page.click(`tr[data-plugin="${plugin}"] .deactivate a`);
			console.log(`Deactivated plugin "${plugin}".`);
		} catch (error) {
			console.log(`Could not deactivate the plugin "${plugin}". May be it's already deactivated.`);
		}
	}

	await switchUserToTest();
}
