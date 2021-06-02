import { useMemo } from 'react';

import { CheckboxGroup } from '@eventespresso/adapters';

import { Checkbox } from './Checkbox';
import { MultiCheckboxProps } from './types';

export const MultiCheckbox: React.FC<MultiCheckboxProps> = ({ options = [], ...props }) => {
	const children = useMemo(() => {
		return options.map(({ label, value, ...rest }, index) => (
			<Checkbox {...rest} key={`${value}${index}`} value={value}>
				{label}
			</Checkbox>
		));
	}, [options]);

	return <CheckboxGroup {...props}>{children}</CheckboxGroup>;
};
