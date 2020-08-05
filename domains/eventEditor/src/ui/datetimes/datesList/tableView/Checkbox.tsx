import React, { useCallback } from 'react';

import { Checkbox as CheckboxAdapter } from '@eventespresso/adapters';
import { useBulkEdit } from '@eventespresso/services';
import { EntityId } from '@eventespresso/data';

import { useEdtrState } from '@edtrHooks/edtrState';

type Props = {
	id?: EntityId;
};

const Checkbox: React.FC<Props> = ({ id }) => {
	const { selected, toggleSelected, unSelectAll, selectMultiple } = useBulkEdit();
	const { visibleDatetimeIds } = useEdtrState();

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
				selectMultiple(visibleDatetimeIds);
			}
		}
	}, [id, selectMultiple, selected.length, toggleSelected, unSelectAll, visibleDatetimeIds]);

	// for header chekbox, if visible and selected have same length, means all are checked
	const isChecked = id ? selected.includes(id) : selected.length === visibleDatetimeIds.length;
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

export default Checkbox;
