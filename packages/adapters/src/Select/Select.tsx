import React from 'react';
import { Select as ChakraSelect } from '@chakra-ui/select';

import { useOnChange } from '@eventespresso/hooks';
import type { SelectProps } from './types';

const DEFAULT_OPTIONS = [];

export const Select: React.FC<SelectProps> = ({
	children,
	className,
	options = DEFAULT_OPTIONS,
	onChange,
	onChangeValue,
	...props
}) => {
	const onChangeHandler = useOnChange({ onChange, onChangeValue });

	const childNodes =
		children ||
		options.map(({ label, options: optionGroups, value, ...optionProps }, index) => {
			if (optionGroups?.length && label) {
				return (
					<optgroup label={label as string} key={`${label}${index}`} {...optionProps}>
						{optionGroups.map(({ label: optLabel, value, ...optProps }, i) => (
							<option {...optProps} value={value} key={`${value}${i}`}>
								{optLabel}
							</option>
						))}
					</optgroup>
				);
			}
			return (
				<option {...optionProps} value={value} key={`${value}${index}`}>
					{label}
				</option>
			);
		});

	return (
		<ChakraSelect {...props} className={className} onChange={onChangeHandler}>
			{childNodes}
		</ChakraSelect>
	);
};
