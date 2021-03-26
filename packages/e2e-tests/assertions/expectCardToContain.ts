import { expect } from '@jest/globals';

export const expectCardToContain = async (
	{ capacity, desc, endDate, endDateMonth, name, quantity, startDate, startDateMonth, type }: any // TODO replace with a proper interface
) => {
	const entityList = `#ee-entity-list-${type}s`;

	expect(await page.$eval(`${entityList} .entity-card-details__name`, (elements) => elements.innerHTML)).toContain(
		name
	);

	desc &&
		expect(
			await page.$eval(`${entityList} .entity-card-details__text`, (elements) => elements.innerHTML)
		).toContain(desc);

	capacity &&
		expect(
			await page.$eval(
				`${entityList} .ee-entity-details__value .ee-tabbable-text`,
				(elements) => elements.innerHTML
			)
		).toContain(capacity);

	quantity &&
		expect(
			await page.$eval(
				`${entityList} .ee-entity-details__value .ee-tabbable-text`,
				(elements) => elements.innerHTML
			)
		).toContain(quantity);

	expect(await page.$eval(`${entityList} .entity-card__sidebar`, (el) => el.innerHTML)).toContain(startDate);
	expect(await page.$eval(`${entityList} .entity-card__sidebar`, (el) => el.innerHTML)).toContain(
		startDateMonth.substring(0, 3)
	);
	expect(await page.$eval(`${entityList} .entity-card__sidebar`, (el) => el.innerHTML)).toContain(endDate);
	expect(await page.$eval(`${entityList} .entity-card__sidebar`, (el) => el.innerHTML)).toContain(
		endDateMonth.substring(0, 3)
	);
};
