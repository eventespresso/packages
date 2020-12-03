import type {
	FlexProps as ChakraFlexProps,
	InputProps as ChakraInputProps,
	NumberInputProps as ChakraNumberInputProps,
	PseudoBoxProps as ChakraPseudoBoxProps,
} from '@chakra-ui/react';

export interface NumberInputProps
	extends Pick<
		ChakraNumberInputProps,
		| 'aria-valuenow'
		| 'clampValueOnBlur'
		| 'className'
		| 'defaultValue'
		| 'id'
		| 'keepWithinRange'
		| 'max'
		| 'min'
		| 'onChange'
		| 'precision'
		| 'step'
		| 'value'
	> {
	decrementStepperProps?: ChakraPseudoBoxProps;
	disabled?: boolean;
	inputFieldProps?: ChakraInputProps;
	inputStepperProps?: ChakraFlexProps;
	incrementStepperProps?: ChakraPseudoBoxProps;
	showStepper?: boolean;
}
