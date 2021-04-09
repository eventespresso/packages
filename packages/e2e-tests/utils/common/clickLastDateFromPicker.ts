import { lastDateSelector } from '../../constants';

export async function clickLastDateFromPicker() {
	const monthSelector = '.react-datepicker__current-month';

	const date = await page.$eval(lastDateSelector, (elements) => elements.innerHTML);

	await page.click(lastDateSelector);

	const [month] = await page.$eval(monthSelector, (elements) => elements?.innerHTML?.split(' '));

	return [date, month];
}
