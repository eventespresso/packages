import { saveVideo } from 'playwright-video';

import { createNewEvent, EntityListParser, pressKeyWithModifier } from '../../utils';

const namespace = 'event.free-event.registration';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);
});

const dateParser = new EntityListParser('datetime');
const ticketParser = new EntityListParser('ticket');

describe('Create free event and register to it', () => {
	it('should show thank you message if everything went well', async () => {
		const dateRootSelector = dateParser.getRootSelector();
		const ticketRootSelector = ticketParser.getRootSelector();
		const capture = await saveVideo(page, `artifacts/${namespace}.mp4`);

		try {
			await createNewEvent({ title: 'Free event' });
			await page.click(`${dateRootSelector} [data-testid="ee-datetime-inline-cap-preview"]`);
			await page.type(`${dateRootSelector} [data-testid="ee-datetime-inline-cap"]`, '75');
			await page.click(`${ticketRootSelector} [data-testid="ee-ticket-inline-qty-preview"]`);
			await page.type(`${ticketRootSelector} [data-testid="ee-ticket-inline-qty"]`, '75');
			await page.evaluate(() => window.scrollTo(0, 0));
			await page.click('#edit-slug-box #sample-permalink a');

			await page.waitForTimeout(4000);

			await page.selectOption('.tckt-slctr-tbl-td-qty select', {
				value: '1',
			});
			await page.click('.ticket-selector-submit-btn');

			await page.waitForTimeout(4000);

			await page.click('.spco-step-dv .ee-reg-qstn-fname');
			await pressKeyWithModifier('primary', 'a');
			await page.type('.spco-step-dv .ee-reg-qstn-fname', 'John');
			await page.click('.spco-step-dv .ee-reg-qstn-lname');
			await pressKeyWithModifier('primary', 'a');
			await page.type('.spco-step-dv .ee-reg-qstn-lname', 'Doe');
			await page.click('.spco-step-dv .ee-reg-qstn-email');
			await pressKeyWithModifier('primary', 'a');
			await page.type('.spco-step-dv .ee-reg-qstn-email', 'test@example.com');
			await page.click('.spco-next-step-btn');
		} catch (e) {
			await capture.stop();
		}

		await page.waitForTimeout(5000);
		const statusTitle = await page
			.$eval('.status-publish .entry-title', (elements) => elements.textContent)
			.catch(console.log);

		expect(statusTitle).toContain('Thank You');
	});
});
