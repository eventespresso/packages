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

	await page.screenshot({ path: `activatePlugin-before.png` });

	const disableLink = await page.$(`tr[data-slug="${slug}"] .deactivate a`);

	if (disableLink) {
		await switchUserToTest();
		return;
	}

	await page.click(`tr[data-slug="${slug}"] .activate a`);

	await switchUserToTest();

	await page.screenshot({ path: `activatePlugin-after.png` });
}
