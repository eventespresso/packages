import type { InputProps as ChakraInputProps } from '@chakra-ui/react';

import type { CommonInputProps } from '../types';

export interface TextInputProps
	extends Omit<ChakraInputProps, 'size' | 'variant'>,
		CommonInputProps<HTMLInputElement> {}
