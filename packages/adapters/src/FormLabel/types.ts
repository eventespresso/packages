import type { FormLabelProps as ChakraFormLabelProps } from '@chakra-ui/react';

export interface FormLabelProps extends Pick<ChakraFormLabelProps, 'htmlFor' | 'as' | 'id' | 'className'> {}
