import React from 'react';
import { omit } from 'ramda';

import { Radio, RadioGroup } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const RadioField: React.FC<FieldRendererProps> = ({ input, options, ...props }) => {
	const children = options.map(({ label, value, ...rest }, index) => {
		return (
			<Radio value={value} {...rest} key={`${value}${index}`}>
				{label}
			</Radio>
		);
	});
	const propsWithoutMeta = omit(['meta'], props);

	return (
		<RadioGroup {...input} {...propsWithoutMeta}>
			{children}
		</RadioGroup>
	);
};

export default RadioField;
