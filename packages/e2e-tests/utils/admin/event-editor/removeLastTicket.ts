import { clickButton } from '@e2eUtils/common';

export const removeLastTicket = async () => {
	await page.click('[aria-label="ticket main menu"]').catch(() => console.log('there is no ticket main menu'));

	await clickButton('trash ticket');
	await clickButton('Yes');
};
