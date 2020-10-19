import React from 'react';

import { Checkbox, CheckboxGroup } from '@eventespresso/adapters';
import withoutMetaProp from './withoutMetaProp';
import type { FieldRendererProps } from '../types';

const MultiCheck: React.FC<FieldRendererProps> = ({ input, options, ...props }) => {
	const children = options.map(({ label, value, ...rest }, index) => {
		return (
			<Checkbox {...rest} key={`${value}${index}`} value={value}>
				{label}
			</Checkbox>
		);
	});

	const value = input.value || [];

	return (
		<CheckboxGroup {...input} {...props} value={value}>
			{children}
		</CheckboxGroup>
	);
};

export default withoutMetaProp(MultiCheck);
