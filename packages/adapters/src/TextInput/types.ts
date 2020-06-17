import { InputProps as ChakraInputProps } from '@chakra-ui/core';

import { CommonInputProps } from '../types';

export interface TextInputProps extends ChakraInputProps, CommonInputProps<HTMLInputElement> {}
