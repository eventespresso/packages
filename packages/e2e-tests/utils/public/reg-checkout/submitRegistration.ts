export const submitRegistration = async () => {
	await page.click('.spco-next-step-btn');
	await page.waitForTimeout(3000);
};
