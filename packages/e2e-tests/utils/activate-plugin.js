import { switchUserToAdmin } from './switch-user-to-admin';
import { switchUserToTest } from './switch-user-to-test';
import { visitAdminPage } from './visit-admin-page';

/**
 * Activates an installed plugin.
 *
 * @param {string} slug Plugin slug.
 */
export async function activatePlugin(slug) {
	await switchUserToAdmin();
	await visitAdminPage('plugins.php', null);

	try {
		const disableLink = await page.$eval(`tr[data-slug="${slug}"] .deactivate a`, (el) => el.innerHTML);

		if (disableLink) {
			await switchUserToTest();
			return;
		}
	} catch (error) {
		console.log(`Could not deactivate the plugin "${slug}". May be it's already deactivated.`);
	}

	try {
		await page.click(`tr[data-slug="${slug}"] .activate a`);
	} catch (error) {
		console.log(`Could not activate the plugin "${slug}". May be it's already active.`);
	}

	await switchUserToTest();
}
