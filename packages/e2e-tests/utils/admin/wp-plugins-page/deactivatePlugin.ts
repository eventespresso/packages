import { switchUserToAdmin, switchUserToTest, visitAdminPage } from '@e2eUtils/wp';
import { EE_DEBUG } from '@e2eUtils/misc';

import { isPluginNetworkActive } from './isPluginNetworkActive';

/**
 * Deactivates an active plugin.
 *
 * @param {string} plugin Path to the plugin file, relative to the plugins directory.
 */
export async function deactivatePlugin(plugin: string): Promise<void> {
	await switchUserToAdmin();
	await visitAdminPage('plugins.php', null);

	if (await isPluginNetworkActive(plugin)) {
		EE_DEBUG && console.log(`Plugin "${plugin}" is network active.`);
	} else {
		try {
			await page.click(`tr[data-plugin="${plugin}"] .deactivate a`);
			EE_DEBUG && console.log(`Deactivated plugin "${plugin}".`);
		} catch (error) {
			EE_DEBUG && console.log(`Could not deactivate the plugin "${plugin}". May be it's already deactivated.`);
		}
	}

	await switchUserToTest();
}
