import type {
	FlexProps as ChakraFlexProps,
	InputProps as ChakraInputProps,
	NumberInputProps as ChakraNumberInputProps,
	PseudoBoxProps as ChakraPseudoBoxProps,
} from '@chakra-ui/core';

export interface NumberInputProps
	extends Pick<ChakraNumberInputProps, 'aria-valuenow' | 'className' | 'id' | 'onChange' | 'value'> {
	decrementStepperProps?: ChakraPseudoBoxProps;
	disabled?: boolean;
	inputFieldProps?: ChakraInputProps;
	inputStepperProps?: ChakraFlexProps;
	incrementStepperProps?: ChakraPseudoBoxProps;
	showStepper?: boolean;
}
