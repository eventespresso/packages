import type {
	FlexProps as ChakraFlexProps,
	InputProps as ChakraInputProps,
	NumberInputProps as ChakraNumberInputProps,
	BoxProps as ChakraBoxProps,
} from '@chakra-ui/react';

type Picked =
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
	| 'value';

export interface NumberInputProps extends Pick<ChakraNumberInputProps, Picked> {
	decrementStepperProps?: ChakraBoxProps;
	disabled?: boolean;
	inputFieldProps?: ChakraInputProps;
	inputStepperProps?: ChakraFlexProps;
	incrementStepperProps?: ChakraBoxProps;
	name?: string;
	showStepper?: boolean;
}
