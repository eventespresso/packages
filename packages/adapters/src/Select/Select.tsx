import React, { useCallback } from 'react';
import { Select as ChakraSelect } from '@chakra-ui/select';

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

	const onChangeHandler: SelectProps['onChange'] = useCallback(
		(event) => {
			if (typeof onChangeValue === 'function') {
				onChangeValue(event.target.value, event);
			}

			if (typeof onChange === 'function') {
				onChange(event);
			}
		},
		[onChange, onChangeValue]
	);

	return (
		<ChakraSelect {...props} className={className} onChange={onChangeHandler}>
			{childNodes}
		</ChakraSelect>
	);
};
