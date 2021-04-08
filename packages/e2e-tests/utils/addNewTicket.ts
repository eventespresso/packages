import { clickButton, setPrice, fillDateTicketForm, DateTicketFormArgs } from './';
import { EntityListParser } from './EntityListParser';

const listParser = new EntityListParser('ticket');
const wrapperSelector = `${listParser.getRootSelector()} .ee-entity-list__card-view`;

export const addNewTicket = async ({ amount, ...fields }: DateTicketFormArgs & { amount?: number }) => {
	await page.click('text=Add New Ticket');

	await fillDateTicketForm(fields);

	await clickButton('Set ticket prices');

	const defaultPricesButton = 'text=Add default prices';

	await page.waitForSelector(defaultPricesButton);

	await page.click(defaultPricesButton);

	await setPrice({ amount, isBasePrice: true } as any);

	await clickButton('Save and assign dates');

	// Ensure that trashed dates are visible
	await page.click('[aria-label="show trashed dates"]');

	await page.click('[aria-label="assign ticket"]');

	const countBeforeSubmit = await listParser.getItemCount();
	console.log({ countBeforeSubmit });

	await page.click('button[type=submit]');

	// Wait for tickets list to update
	await page.waitForFunction(
		([selector, prevCount]) => {
			console.log({ prevCount, selector });
			// if there is no list wrapper, it means ticket is not created yet
			if (!document.querySelector(selector)) {
				return false;
			}

			const items = document.querySelectorAll(`${selector} .ee-entity-list-item`);
			const nextCount = items.length;

			// if number of previous items is same as new, ticket is not in the list yet
			if (prevCount === nextCount) {
				return false;
			}

			// lets loop through each item
			for (const item of items.values()) {
				// if the item id includes 'temp:', it means it is the optimistic response from Apollo, lets ignore it
				const id = item.id;
				console.log({ id });
				if (id.includes('temp:')) {
					return false;
				}
			}
			return true;
		},
		[wrapperSelector, countBeforeSubmit] as const
	);
};
