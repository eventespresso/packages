export const isSubmitBtnDisabled = async () =>
	await page.$eval('button[type=submit]', (el: HTMLButtonElement) => el.disabled);
