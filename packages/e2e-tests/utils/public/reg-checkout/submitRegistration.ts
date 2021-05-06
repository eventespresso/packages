export const submitRegistration = async () => {
	await Promise.all([page.waitForNavigation(), page.click('input[value="Proceed to Finalize Registration"]')]);
	
	await page.waitForSelector('#espresso-thank-you-page-overview-dv');
};
