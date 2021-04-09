import { formatDateTime } from '@e2eUtils/common';

const formatDate = formatDateTime();

export type DateTicketFormArgs = {
	isTrashed?: boolean;
	endDate?: Date;
	name?: string;
	startDate?: Date;
};

export const fillDateTicketForm = async ({ name, isTrashed, startDate, endDate }: DateTicketFormArgs) => {
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

		isTrashed && (await page.click('[aria-label="Trash"]'));
	} catch (e) {
		console.log(e);
	}
};
