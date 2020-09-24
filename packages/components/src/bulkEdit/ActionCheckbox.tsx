import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { Checkbox } from '@eventespresso/adapters';
import { useBulkEdit } from '@eventespresso/services';
import type { EntityId } from '@eventespresso/data';

export type ActionCheckboxProps = {
	id?: EntityId;
	label?: React.ReactNode;
	visibleEntityIds?: Array<EntityId>;
};

export const ActionCheckbox: React.FC<ActionCheckboxProps> = ({ id, label, visibleEntityIds }) => {
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

	// for header chekbox, if visible and selected have same length, means all are checked
	const isChecked = id ? selected.includes(id) : selected.length === visibleEntityIds.length;
	// set "-" icon for header when some are selected
	const isIndeterminate = !isChecked && selected.length && !id;

	return (
		<Checkbox
			aria-label={__('select entity')}
			className='ee-bulk-edit-actions__checkbox'
			isChecked={isChecked}
			isIndeterminate={isIndeterminate}
			label={label}
			onChange={onChange}
		/>
	);
};
