import React, { useCallback } from 'react';

import { Checkbox as CheckboxAdapter } from '@eventespresso/adapters';
import { useBulkEdit } from '@eventespresso/services';

import { EntityId } from '@eventespresso/data';

type Props = {
	id: EntityId;
	isHeader?: boolean;
};

const Checkbox: React.FC<Props> = ({ id, isHeader }) => {
	const { selected, toggleSelected, unSelectAll, selectMultiple } = useBulkEdit();

	const onChange = useCallback(() => {
		if (isHeader) {
			// if there are some selected
			if (selected.length) {
				unSelectAll();
			} else {
				// somehow get all the visible entity ids
				selectMultiple([]);
			}
		} else {
			toggleSelected(id);
		}
	}, [id, isHeader, selectMultiple, selected.length, toggleSelected, unSelectAll]);

	return <CheckboxAdapter p='0.5em' isChecked={selected.includes(id)} onChange={onChange} />;
};

export default Checkbox;
