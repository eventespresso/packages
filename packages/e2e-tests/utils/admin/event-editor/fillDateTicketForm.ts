import { formatDateTime } from '@e2eUtils/common';

const formatDate = formatDateTime();

export type DateTicketFormArgs = {
	capacity?: string;
	isTrashed?: boolean;
	endDate?: Date;
	name?: string;
	quantity?: string;
	startDate?: Date;
};

export const fillDateTicketForm = async ({
	capacity,
	endDate,
	name,
	isTrashed,
	quantity,
	startDate,
}: DateTicketFormArgs) => {
	try {
		name && (await page.fill('input[aria-label="Name"]', name));

		if (startDate) {
			// Since date picker input looses focus to popover on initial focus
			// We need to focus twice
			await page.focus('input[aria-label="Start Date"]');
			await page.fill('input[aria-label="Start Date"]', await formatDate(startDate));
		}

		if (endDate) {
			await page.focus('input[aria-label="End Date"]');
			await page.fill('input[aria-label="End Date"]', await formatDate(endDate));
		}

		if (capacity) {
			await page.click('[name="capacity"]');
			await page.type('[name="capacity"]', capacity);
		}

		if (quantity) {
			await page.click('[name="quantity"]');
			await page.type('[name="quantity"]', quantity);
		}

		isTrashed && (await page.click('[aria-label="Trash"]'));
	} catch (e) {
		console.log(e);
	}
};
