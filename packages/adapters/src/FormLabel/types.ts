import type { FormLabelProps as ChakraFormLabelProps } from '@chakra-ui/react/dist/FormLabel';

export interface FormLabelProps extends Pick<ChakraFormLabelProps, 'htmlFor'> {}
