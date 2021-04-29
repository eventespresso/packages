import { EE_DEBUG } from '../misc';

const selector = '.ee-alert-dialog';

export const respondToAlert = async (optionToChoose = 'Yes') => {
	const alert = await page.$(selector);

	if (alert) {
		const button = await alert.$(`[type=button] >> text=${optionToChoose}`);
		if (button) {
			button.click();
		} else {
			EE_DEBUG && console.error(`Could not find the option "${optionToChoose}" in the alert.`);
		}
	}
};
