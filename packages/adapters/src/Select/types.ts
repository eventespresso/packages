import type { SelectProps as ChakraSelectProps } from '@chakra-ui/core';

import type { CommonInputProps } from '../types';

export interface OptionProps {
	value?: React.ReactText;
	label?: React.ReactNode;
	options?: Array<Omit<OptionProps, 'options'>>; // for optgroup
	[key: string]: any;
}

export type OptionsType = Array<OptionProps>;

export interface SelectProps extends ChakraSelectProps, CommonInputProps<HTMLSelectElement> {
	options?: OptionsType;
}
