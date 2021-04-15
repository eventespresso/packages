// Selects the first day from third row.
// Third row, just to be safe that first and last row has no dates for
// next or previous month which are not clickable
const daySelector = '.react-datepicker__week:nth-child(3) .react-datepicker__day';

export async function clickLastDateFromPicker() {
	const monthSelector = '.react-datepicker__current-month';

	// Lets goto next month, which will have no rows disabled
	await page.click('.react-datepicker__navigation--next');

	const date = await page.$eval(daySelector, (elements) => elements.innerHTML);

	await page.click(daySelector);

	const [month] = await page.$eval(monthSelector, (elements) => elements?.innerHTML?.split(' '));

	return [date, month];
}
