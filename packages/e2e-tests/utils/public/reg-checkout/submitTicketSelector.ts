export const submitTicketSelector = async () => {
	await Promise.all([page.waitForNavigation(), page.click('input[value="Register Now"]')]);
	
	await page.waitForSelector('#ee-spco-attendee_information-reg-step-form');
};
