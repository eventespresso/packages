import type { TextareaProps as ChakraTextareaProps } from '@chakra-ui/textarea';

export interface TextareaProps extends Omit<ChakraTextareaProps, 'sizes'> {}
