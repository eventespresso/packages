import React from 'react';

import { Select } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const SelectField: React.FC<FieldRendererProps> = ({ input, multiple, ...selectProps }) => {
	// make sure the value is an array when mode is "multiple"
	const value = multiple ? input.value || [] : input.value;

	return <Select {...input} value={value} {...selectProps} />;
};

export default SelectField;
