import type { TextareaProps as ChakraTextareaProps } from '@chakra-ui/react';

export interface TextareaProps extends Omit<ChakraTextareaProps, 'sizes'> {}
