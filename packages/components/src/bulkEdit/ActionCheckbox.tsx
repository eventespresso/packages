import React, { useCallback } from 'react';

import { __, sprintf } from '@eventespresso/i18n';
import { Checkbox } from '@eventespresso/adapters';
import { useBulkEdit } from '@eventespresso/services';
import type { EntityId, EntityDbId } from '@eventespresso/data';

export type ActionCheckboxProps = {
	dbId?: EntityDbId;
	id?: EntityId;
	label?: React.ReactNode;
	visibleEntityIds?: Array<EntityId>;
};

export const ActionCheckbox: React.FC<ActionCheckboxProps> = ({ dbId, id, label, visibleEntityIds }) => {
	const { selected, toggleSelected, unSelectAll, selectMultiple } = useBulkEdit();

	const onChange = useCallback(() => {
		// if id is passed it's from body row
		if (id) {
			toggleSelected(id);
		} else {
			// no id means it's the header row

			// if there are some selected
			if (selected.length) {
				unSelectAll();
			} else {
				selectMultiple(visibleEntityIds);
			}
		}
	}, [id, selectMultiple, selected.length, toggleSelected, unSelectAll, visibleEntityIds]);

	const ariaLabel =
		id && dbId
			? sprintf(
					/* translators: %d entity id */
					__('select entity with id %d'),
					String(dbId)
			  )
			: __('select all entities');

	// for header chekbox, if visible and selected have same length, means all are checked
	const isChecked = id ? selected.includes(id) : selected.length === visibleEntityIds.length;

	// set "-" icon for header when some are selected
	const isIndeterminate = !isChecked && selected.length && !id;

	return (
		<Checkbox
			aria-label={ariaLabel}
			className='ee-bulk-edit-actions__checkbox'
			isChecked={isChecked}
			isIndeterminate={isIndeterminate}
			label={label}
			onChange={onChange}
		/>
	);
};
