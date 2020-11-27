import React from 'react';

import { Select } from '../../../components/src/Select';
import type { SelectProps } from '../../../components/src/Select/types';
import type { FieldRendererProps } from '../types';

interface Props extends Omit<FieldRendererProps, 'width'>, Omit<SelectProps, 'type'> {}

const SelectField: React.FC<Props> = ({ input, multiple, ...props }) => {
	// make sure the value is an array when mode is "multiple"
	const value = multiple ? input.value || [] : input.value;

	return <Select {...props} {...input} value={value} />;
};

export default SelectField;
