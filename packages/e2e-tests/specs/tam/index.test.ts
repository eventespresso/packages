/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { createNewEvent } from '../../utils';
import { isSubmitBtnDisabled } from '../../assertions';

beforeAll(async () => {
	await saveVideo(page, 'artifacts/TAM.mp4');

	await createNewEvent({ title: 'TAM-related' });

	await page.click('text=Ticket Assignments');
});

describe('TAM', () => {
	it('if there are no assignments - there should be a related info and a disabled submit button', async () => {
		await page.click('[aria-label="OLD"]');

		await expect(page).toHaveText(
			'.ee-banner--info',
			'Tickets must always have at least one date assigned to them but one or more of the tickets below does not have any.'
		);

		await expect(await isSubmitBtnDisabled()).toBe(true);

		await page.click('[aria-label="REMOVED"]');
	});

	it('if there is an assignment - the submit button should be enabled', async () => {
		await page.click('[aria-label="OLD"]');

		await expect(await isSubmitBtnDisabled()).toBe(true);

		await page.click('[aria-label="REMOVED"]');

		await expect(await isSubmitBtnDisabled()).toBe(false);
	});
});
