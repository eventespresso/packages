import React, { useCallback } from 'react';

import { Checkbox as CheckboxAdapter } from '@eventespresso/adapters';
import { useBulkEdit } from '@eventespresso/services';
import { EntityId } from '@eventespresso/data';

export type ActionCheckboxProps = {
	id?: EntityId;
	visibleEntityIds?: Array<EntityId>;
};

export const ActionCheckbox: React.FC<ActionCheckboxProps> = ({ id, visibleEntityIds }) => {
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
		<CheckboxAdapter
			py='0.5em'
			px='0.8em'
			isChecked={isChecked}
			isIndeterminate={isIndeterminate}
			onChange={onChange}
		/>
	);
};
