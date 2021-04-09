export const chooseFromTicketSelector = async (name: string, qty: number) => {
	await page.selectOption(`.event-tickets tr:has-text('${name}') .tckt-slctr-tbl-td-qty select`, {
		value: String(qty),
	});
};
