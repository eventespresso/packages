import type { InputProps as ChakraInputProps } from '@chakra-ui/core';

import type { CommonInputProps } from '../types';

export interface TextInputProps
	extends Omit<ChakraInputProps, 'size' | 'variant'>,
		CommonInputProps<HTMLInputElement> {}
