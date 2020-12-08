import type { TextareaProps as ChakraTextareaProps } from '@chakra-ui/core';

export interface TextareaProps extends Omit<ChakraTextareaProps, 'sizes'> {}
