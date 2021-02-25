/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

// import { saveVideo } from 'playwright-video';

// import type { RegistrationStatus } from '@eventespresso/data';

// import { createNewEvent } from '../utils';

// describe.skip('editRegistrationOptions', () => {
// it('should activate event-espresso-core', async () => {
// const capture = await saveVideo(page, 'artifacts/video.mp4');
// await page.screenshot({ path: `artifacts/before.png` });
// await createNewEvent({ title: 'to be deleted' });
// await page.screenshot({ path: `artifacts/after.png` });
// const registrationDefaultStatusSelect = '[data-testid="ee-event-registration-default-status-select"]';
// const [registrationStatusResponse] = await Promise.all([
// 	page.waitForResponse('**/graphql'),
// 	page.selectOption(registrationDefaultStatusSelect, 'APPROVED' as RegistrationStatus),
// ]);
// expect(await registrationStatusResponse.status()).toBe(200);
// const activeStatusSelect = '[data-testid="ee-event-registration-active-status-select"]';
// const [activeStatusResponse] = await Promise.all([
// 	page.waitForResponse('**/graphql'),
// 	page.selectOption(activeStatusSelect, 'isUpcoming'),
// ]);
// expect(await activeStatusResponse.status()).toBe(200);
// expect(await activeStatusResponse?.text()).toContain('Variable \\"$input\\" got invalid value');
// const maxReg = '[data-testid="ee-event-registration-max-reg-inline-edit"]';
// const maxRegInput = '[data-testid="ee-event-registration-max-reg-inline-edit-input"]';
// const [maxRegResponse] = await Promise.all([
// 	page.waitForResponse('**/graphql'),
// 	page.click(maxReg),
// 	page.focus(maxRegInput),
// 	page.type(maxRegInput, '111'),
// 	page.press(maxRegInput, 'Enter'),
// ]);
// expect(await maxRegResponse.status()).toBe(200);
// const [ticketSelectorResponse] = await Promise.all([
// 	page.waitForResponse('**/graphql'),
// 	page.click('[aria-describedby="ee-event-registration-ticket-selector"]'),
// ]);
// expect(ticketSelectorResponse.status()).toBe(200);
// const [donationsResponse] = await Promise.all([
// 	page.waitForResponse('**/graphql'),
// 	page.click('[aria-describedby="ee-event-donations"]'),
// ]);
// expect(donationsResponse.status()).toBe(200);
// await capture.stop();
// await browser.close();
// });
// });
