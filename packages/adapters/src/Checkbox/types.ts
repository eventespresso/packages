import type { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/react';

type PickedProps = 'aria-label' | 'className' | 'isChecked' | 'isDisabled' | 'isIndeterminate' | 'onChange' | 'value';

export interface CheckboxProps extends Pick<ChakraCheckboxProps, PickedProps> {
	label?: React.ReactNode;
}
