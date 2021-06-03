import { useMemo } from 'react';

import { CheckboxGroup, Stack } from '@eventespresso/adapters';

import { Checkbox } from './Checkbox';
import { MultiCheckboxProps } from './types';

export const MultiCheckbox: React.FC<MultiCheckboxProps> = ({ options = [], direction = 'row', ...props }) => {
	const children = useMemo(() => {
		return options.map(({ label, value, ...rest }, index) => (
			<Checkbox {...rest} key={`${value}${index}`} value={value}>
				{label}
			</Checkbox>
		));
	}, [options]);

	return (
		<CheckboxGroup {...props}>
			<Stack direction={direction}>{children}</Stack>
		</CheckboxGroup>
	);
};
