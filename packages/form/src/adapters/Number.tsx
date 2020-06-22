import React from 'react';

import { NumberInput } from '@eventespresso/adapters';
import { FieldRendererProps } from '../types';

const NumberField: React.FC<FieldRendererProps> = ({
	input: { onChange, value, ...input },
	meta: { error, submitError },
	...rest
}) => {
	return (
		<NumberInput
			inputFieldProps={input}
			isInvalid={error || submitError}
			onChange={onChange}
			value={value}
			{...rest}
		/>
	);
};

export default NumberField;
