export const submitTicketSelector = async () => {
	await page.click('.ticket-selector-submit-btn');
	await page.waitForTimeout(4000);
};
