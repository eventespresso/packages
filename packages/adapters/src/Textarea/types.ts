import type { InputProps } from '@chakra-ui/core';

export interface TextareaProps extends Omit<InputProps<HTMLTextAreaElement>, 'sizes'> {}
