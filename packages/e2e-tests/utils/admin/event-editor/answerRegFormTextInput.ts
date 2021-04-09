import { pressKeyWithModifier } from '@e2eUtils/misc';

export const answerRegFormTextInput = async (name: string, value: string) => {
	const targetSelector = `.spco-step-dv .ee-reg-qstn-${name}`;
	await page.click(targetSelector);
	await pressKeyWithModifier('primary', 'a');
	await page.type(targetSelector, value);
};
