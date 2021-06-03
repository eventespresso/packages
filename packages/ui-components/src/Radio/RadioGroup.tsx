import { useMemo } from 'react';

import { RadioGroup as RadioGroupAdapter, Stack } from '@eventespresso/adapters';

import { Radio } from './Radio';
import { RadioGroupProps } from './types';

export const RadioGroup: React.FC<RadioGroupProps> = ({ options = [], direction = 'row', ...props }) => {
	const children = useMemo(() => {
		return options.map(({ label, value, ...rest }, index) => {
			return (
				<Radio id={`${props.id}-${value}`} {...rest} key={`${value}${index}`} value={value}>
					{label}
				</Radio>
			);
		});
	}, [options, props.id]);

	return (
		<RadioGroupAdapter {...props}>
			<Stack direction={direction}>{children}</Stack>
		</RadioGroupAdapter>
	);
};
