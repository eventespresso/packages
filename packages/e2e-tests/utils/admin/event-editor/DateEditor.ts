import { clickButton } from '@e2eUtils/common';
import { EntityEditor, CommonEntityFields } from './EntityEditor';
import { ListView, Item, Field } from './EntityListParser';
import { fillDateTicketForm } from './fillDateTicketForm';

export interface DateFields extends CommonEntityFields {
	capacity?: string;
}

export class DateEditor extends EntityEditor {
	constructor(view: ListView = 'card') {
		super('datetime', view);

		this.dropdownMenuLabel = 'event date main menu';
		this.editButtonLabel = 'edit datetime';
		this.deleteButtonLabel = 'trash datetime';
		this.copyButtonLabel = 'copy datetime';
	}

	/**
	 * Reset instance data.
	 */
	reset(): void {
		super.reset();
		this.setEntityType('datetime');
	}

	/**
	 * Given an entity item, it updates the capacity in the inline edit input
	 */
	updateCapacityInline = async (item: Item, capacity: string | number) => {
		await this.updateDetailsInputInline(item, String(capacity));
	};

	/**
	 * Opens the edit form for the date identified by the field and its value.
	 */
	fillAndSubmitForm = async (formData: DateFields): Promise<void> => {
		// Fill in the details
		await fillDateTicketForm(formData);
		// Move to the last step
		await clickButton('Save and assign tickets');
		// Submit the modal/form
		await this.submitEditForm();
	};

	/**
	 * Opens the edit form for the date identified by the field and its value.
	 */
	editDateBy = async (field: Field, value: string | number, formData: DateFields): Promise<void> => {
		// Open the edit form modal
		await this.openEditFormBy(field, value);
		// Fill and submit the edit form
		await this.fillAndSubmitForm(formData);
	};

	/**
	 * Opens the edit form for the date identified by the field and its value.
	 */
	editDate = async (item: Item, formData: DateFields): Promise<void> => {
		// Open the edit form modal
		await this.openEditForm(item);
		// Fill and submit the edit form
		await this.fillAndSubmitForm(formData);
	};
}
