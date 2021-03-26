import { switchUserToAdmin } from './switch-user-to-admin';
import { switchUserToTest } from './switch-user-to-test';
import { visitAdminPage } from './visit-admin-page';

/**
 * Activates an installed plugin.
 *
 * @param {string} plugin Path to the plugin file, relative to the plugins directory.
 */
export async function activatePlugin(plugin) {
	await switchUserToAdmin();
	await visitAdminPage('plugins.php', null);

	try {
		const disableLink = await page.$eval(`tr[data-plugin="${plugin}"] .deactivate a`, (el) => el.innerHTML);

		if (disableLink) {
			await switchUserToTest();
			return;
		}
	} catch (error) {
		console.log(`Could not deactivate the plugin "${plugin}". May be it's already deactivated.`);
	}

	try {
		await page.click(`tr[data-plugin="${plugin}"] .activate a`);
	} catch (error) {
		console.log(`Could not activate the plugin "${plugin}". May be it's already active.`);
	}

	await switchUserToTest();
}
