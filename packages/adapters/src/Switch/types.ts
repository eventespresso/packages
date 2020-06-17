import { SwitchProps as ChakraSwitchProps } from '@chakra-ui/core';

import { CommonInputProps } from '../types';

export interface SwitchProps extends ChakraSwitchProps, CommonInputProps<HTMLInputElement, boolean> {}
