import type { SelectProps as ChakraSelectProps } from '@chakra-ui/react';

import type { CommonInputProps } from '../types';

export interface OptionProps {
	label?: React.ReactNode;
	options?: Array<Omit<OptionProps, 'options'>>; // for optgroup
	value?: React.ReactText;
	[key: string]: any;
}

export type OptionsType = Array<OptionProps>;

export interface SelectProps extends Omit<ChakraSelectProps, 'size'>, CommonInputProps<HTMLSelectElement> {
	options?: OptionsType;
}
