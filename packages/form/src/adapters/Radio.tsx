import React from 'react';

import { Radio, RadioGroup } from '@eventespresso/adapters';
import withoutMetaProp from './withoutMetaProp';
import type { FieldRendererProps } from '../types';

const RadioField: React.FC<FieldRendererProps> = ({ input, options, ...props }) => {
	const children = options.map(({ label, value, ...rest }, index) => {
		return (
			<Radio value={value} {...rest} key={`${value}${index}`}>
				{label}
			</Radio>
		);
	});

	return (
		<RadioGroup {...input} {...props}>
			{children}
		</RadioGroup>
	);
};

export default withoutMetaProp(RadioField);
