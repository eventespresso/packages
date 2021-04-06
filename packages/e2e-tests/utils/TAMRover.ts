import type { Page, ElementHandle } from 'playwright';
import { assocPath } from 'ramda';

import { clickButton } from './clickButton';
import { EntityListParser, EntityType, Field, Item } from './EntityListParser';
import { respondToAlert } from './respondToAlert';

export type ForType = EntityType | 'all';

export type AssignmentStatus = 'OLD' | 'NEW' | 'REMOVED';

export type RelationalMap = {
	// Date ID
	[key in number]: {
		// Ticket ID
		[key in number]: AssignmentStatus;
	};
};

export class TAMRover {
	static rootSelector = '.ee-ticket-assignments-manager';

	forType: ForType;

	dbId: number;

	parser: EntityListParser;

	constructor(forType: ForType = 'all', dbId?: number) {
		this.setForType(forType);
		this.setDbId(dbId);
	}

	/**
	 * Change the "for entity type".
	 */
	setForType = (forType: ForType): TAMRover => {
		this.forType = forType;

		// set parser if TAM is for a single date or ticket
		if (this.forType && this.forType !== 'all') {
			this.parser = new EntityListParser(this.forType);
		}

		return this;
	};

	/**
	 * Change the dbId.
	 */
	setDbId = (dbId?: number): TAMRover => {
		this.dbId = dbId;

		return this;
	};

	/**
	 * Retrieve the root selector.
	 */
	getRootSelector = (): string => {
		return TAMRover.rootSelector;
	};

	/**
	 * Launch/open TAM modal.
	 */
	launch = async (): Promise<void> => {
		if (this.forType === 'all') {
			return await clickButton('Ticket Assignments');
		}

		// if it's for a single date or ticket
		// Lets get that entity
		const item = await this.parser.getItem(this.dbId);

		if (!item) {
			return console.error(`Could not launch TAM for ${this.forType} with dbId ${this.dbId}`);
		}

		const label = this.forType === 'datetime' ? 'assign tickets' : 'assign dates';
		// Click on the TAM button for the entity
		const tamButton = await item.$(`button[aria-label="${label}"]`);

		await tamButton?.click();
	};

	/**
	 * Close TAM modal.
	 */
	close = async (): Promise<void> => {
		await page.click(`${this.getRootSelector()} [aria-label="close modal"]`);
		// If TAM is dirty, there may be an alert.
		await respondToAlert('Yes');
	};

	/**
	 * Retrieve the TAM root element.
	 */
	getRoot = async (): ReturnType<Page['$']> => {
		return await page.$(this.getRootSelector());
	};

	/**
	 * Retrieve an array of rows in the table.
	 */
	getRows = async (): ReturnType<ElementHandle['$$']> => {
		const root = await this.getRoot();

		const rows = (await root?.$$('tbody tr')) || [];

		return rows;
	};

	/**
	 * Retrieve an array of columns in the table.
	 */
	getCols = async (): ReturnType<ElementHandle['$$']> => {
		const root = await this.getRoot();

		const cols = (await root?.$$('thead tr th')) || [];

		return cols;
	};

	/**
	 * Retrieve a table row.
	 * If no dbId is provided, first row will be returned.
	 */
	getRow = async (dbId?: number): ReturnType<ElementHandle['$']> => {
		if (dbId) {
			return await this.getRowBy('dbId', dbId);
		}

		const rows = await this.getRows();

		// no dbId is supplied, lets return the first row, if present
		return rows?.[0];
	};

	/**
	 * Retrieve a row/element from the table by the given field value.
	 */
	getRowBy = async (field: Field, value: string | number): ReturnType<ElementHandle['$']> => {
		const rows = await this.getRows();

		if (rows.length && field && value) {
			// We can't use items.find(), because it doesn't accept promises
			for (const item of rows) {
				const fieldValue = await this.getDateField(item, field);

				if (fieldValue === value) {
					return item;
				}
			}
		}
		return null;
	};

	/**
	 * Retrieve the field value of an item/element.
	 */
	getDateField = async (row: Item, field: Field): Promise<string | number> => {
		switch (field) {
			case 'dbId':
				return this.getDateDbId(row);

			case 'name':
				return this.getDateName(row);
		}

		return null;
	};

	/**
	 * Retrieve the dbId of the date from a row.
	 */
	getDateDbId = async (row?: Item): Promise<number> => {
		const targetItem = row || (await this.getRow());

		const dbIdStr = await targetItem?.$eval('td .date-cell-content__id', (e) => e.textContent);

		// textContent for ID is like "ID: 141"
		return dbIdStr && parseInt(dbIdStr.replace('ID: ', ''));
	};

	/**
	 * Retrieve the name of the date from a row.
	 */
	getDateName = async (row?: Item): Promise<string> => {
		const targetItem = row || (await this.getRow());

		return await targetItem?.$eval('td .date-cell-content__name', (e) => e.textContent);
	};

	/**
	 * Retrieve a table col.
	 * If no dbId is provided, first col will be returned.
	 */
	getCol = async (dbId?: number): ReturnType<ElementHandle['$']> => {
		if (dbId) {
			return await this.getColBy('dbId', dbId);
		}

		const cols = await this.getCols();

		// no dbId is supplied, lets return the first col, if present
		return cols?.[0];
	};

	/**
	 * Retrieve a col/element from the table by the given field value.
	 */
	getColBy = async (field: Field, value: string | number): ReturnType<ElementHandle['$']> => {
		const cols = await this.getCols();

		if (cols.length && field && value) {
			// We can't use items.find(), because it doesn't accept promises
			for (const item of cols) {
				const fieldValue = await this.getTicketField(item, field);

				if (fieldValue === value) {
					return item;
				}
			}
		}
		return null;
	};

	/**
	 * Retrieve the field value of an item/element.
	 */
	getTicketField = async (col: Item, field: Field): Promise<string | number> => {
		switch (field) {
			case 'dbId':
				return this.getTicketDbId(col);

			case 'name':
				return this.getTicketName(col);
		}

		return null;
	};

	/**
	 * Retrieve the dbId of the ticket from a col.
	 */
	getTicketDbId = async (col?: Item): Promise<number> => {
		const targetItem = col || (await this.getCol());

		const dbIdStr = await targetItem?.$eval('.header-cell-content__id', (e) => e.textContent);

		// textContent for ID is like "ID: 141"
		return dbIdStr && parseInt(dbIdStr.replace('ID: ', ''));
	};

	/**
	 * Retrieve the name of the ticket from a col.
	 */
	getTicketName = async (col?: Item): Promise<string> => {
		const targetItem = col || (await this.getCol());

		return await targetItem?.$eval('.header-cell-content__name', (e) => e.textContent);
	};

	/**
	 * Generates a map of the current date/ticket relations.
	 */
	generateRelationMap = async (): Promise<RelationalMap> => {
		const rows = await this.getRows();
		const cols = await this.getCols();

		let map: RelationalMap = {};

		for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
			const row = rows[rowIndex];
			const dateDbId = await this.getDateDbId(row);

			if (dateDbId) {
				const dateCells = await row.$$('td');
				// first column (0 index) is the top-left corner, of no use to us.
				for (let colIndex = 1; colIndex < cols.length; colIndex++) {
					const col = cols[colIndex];
					const ticketDbId = await this.getTicketDbId(col);

					if (ticketDbId) {
						const button = await dateCells?.[colIndex]?.$('button');
						const status = await button?.getAttribute('aria-label');

						map = assocPath([`${dateDbId}`, `${ticketDbId}`], status, map);
					}
				}
			}
		}

		return map;
	};
}
