/// <reference types="jest-playwright-preset" />

// import { pressKeyWithModifier } from '../utils/press-key-with-modifier';

export const addNewRegistration = async () =>
	// { ticketName }: any = {}
	{
		const regURl = await page.$eval('.ee-editor-details-reg-url-link', (el) => el.getAttribute('href'));

		console.log(regURl);

		await page.goto(regURl);

		const newReqUrl = await page.$eval('#add-new-registration', (el) => el.getAttribute('href'));

		await page.goto(newReqUrl);
	};
