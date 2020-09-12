import type { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/core';

export interface CheckboxProps extends ChakraCheckboxProps {
	label?: React.ReactElement;
}
