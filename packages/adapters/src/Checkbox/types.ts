import type { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/react';

export interface CheckboxProps
	extends Pick<
		ChakraCheckboxProps,
		'aria-label' | 'className' | 'isChecked' | 'isIndeterminate' | 'onChange' | 'value'
	> {
	label?: React.ReactNode;
}
