import type { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/react';

type PickedProps =
	| 'aria-label'
	| 'className'
	| 'id'
	| 'isChecked'
	| 'isDisabled'
	| 'isIndeterminate'
	| 'name'
	| 'onChange'
	| 'value';

export interface CheckboxProps extends Pick<ChakraCheckboxProps, PickedProps> {
	label?: React.ReactNode;
}
