import React from 'react';
import { omit } from 'ramda';

import { Checkbox, CheckboxGroup } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const MultiCheck: React.FC<FieldRendererProps> = ({ input, options, ...props }) => {
	const children = options.map(({ label, value, ...rest }, index) => {
		return (
			<Checkbox value={value} {...rest} key={`${value}${index}`}>
				{label}
			</Checkbox>
		);
	});

	const propsWithoutMeta = omit(['meta'], props);

	const value = input.value || [];

	return (
		<CheckboxGroup {...input} {...propsWithoutMeta} value={value}>
			{children}
		</CheckboxGroup>
	);
};

export default MultiCheck;
