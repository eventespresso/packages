export const clickEventPostPermaLink = async () => {
	await page.click('#edit-slug-box #sample-permalink');
	await page.waitForTimeout(4000);
};
