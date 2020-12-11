import type { FormLabelProps as ChakraFormLabelProps } from '@chakra-ui/core/dist/FormLabel';

export interface FormLabelProps extends Pick<ChakraFormLabelProps, 'htmlFor' | 'as'> {}
