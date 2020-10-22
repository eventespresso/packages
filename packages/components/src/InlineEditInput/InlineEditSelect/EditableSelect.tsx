import React, { useCallback } from 'react';

import { SelectInput } from '../../';
import type { EditableSelectProps } from './types';

const EditableSelect: React.FC<EditableSelectProps> = ({ isEditing, onSubmit, options, value, ...props }) => {
	const onChange = useCallback(
		(e) => {
			const value = e?.target?.value;
			props?.onChange?.(value);
			onSubmit(value);
		},
		[onSubmit, props]
	);

	return isEditing ? <SelectInput {...props} options={options} onChange={onChange} value={value} /> : null;
};

export default EditableSelect;
