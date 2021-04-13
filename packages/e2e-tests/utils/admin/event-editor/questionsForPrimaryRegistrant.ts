export const questionsForPrimaryRegistrant = async (group: 'Address Information' | 'Personal Information') => {
	await page.$eval(`text=${group}`, (e) => {
		e.closest('p').querySelector('input').click();
	});

	await page.click('#publish');
	await page.waitForLoadState('domcontentloaded');
};
