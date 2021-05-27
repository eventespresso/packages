import type { TextareaProps as ChakraTextareaProps } from '@chakra-ui/react';
import { CommonInputProps } from '../types';

export interface TextareaProps extends Omit<ChakraTextareaProps, 'sizes'>, CommonInputProps<HTMLTextAreaElement> {}
