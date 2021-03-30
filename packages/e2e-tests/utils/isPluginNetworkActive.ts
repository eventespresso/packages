/**
 * Checks if a plugin is network wide active.
 */
export async function isPluginNetworkActive(plugin: string): Promise<boolean> {
	const networkActive = await page.$(`tr[data-plugin="${plugin}"] .network_active`);
	return null !== networkActive;
}
