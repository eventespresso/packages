import type { SwitchProps as ChakraSwitchProps } from '@chakra-ui/core';
import type { CommonInputProps } from '../types';

export interface SwitchProps extends ChakraSwitchProps, CommonInputProps<HTMLInputElement, boolean> {}
