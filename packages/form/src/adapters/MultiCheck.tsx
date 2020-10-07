import React from 'react';

import { Checkbox, CheckboxGroup } from '@eventespresso/adapters';
import withoutMeta from './withoutMeta';
import type { FieldRendererProps } from '../types';

const MultiCheck: React.FC<FieldRendererProps> = ({ input, options, ...props }) => {
	const children = options.map(({ label, value, ...rest }, index) => {
		return (
			<Checkbox value={value} {...rest} key={`${value}${index}`}>
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

export default withoutMeta(MultiCheck);
