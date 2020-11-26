import React from 'react';

import { NumberInput } from '../../../components/src/NumberInput';
import type { FieldRendererProps } from '../types';

const Number: React.FC<FieldRendererProps> = ({ id, input: { onChange, value, ...input }, ...props }) => {
	return <NumberInput {...props} id={id} inputFieldProps={input} onChange={onChange} value={value} />;
};

export default Number;
