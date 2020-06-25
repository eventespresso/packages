import type { InputProps as ChakraInputProps } from '@chakra-ui/core';

import type { CommonInputProps } from '../types';

export interface TextInputProps extends ChakraInputProps, CommonInputProps<HTMLInputElement> {}
