import {
  CheckboxGroupProps as ChakraCheckboxGroupProps,
  FlexProps as ChakraFlexProps,
  InputProps as ChakraInputProps,
  NumberInputProps as ChakraNumberInputProps,
  PseudoBoxProps as ChakraPseudoBoxProps,
} from '@chakra-ui/core';

export interface CommonInputProps<T = Element, V = React.ReactText> {
  onChangeValue?: (value: V, event?: React.ChangeEvent<T> | React.FormEvent<T>) => void;
}

export interface CheckboxGroupProps extends ChakraCheckboxGroupProps {}

export interface NumberInputProps extends ChakraNumberInputProps {
  inputFieldProps?: ChakraInputProps;
  inputStepperProps?: ChakraFlexProps;
  showStepper?: boolean;
  incrementStepperProps?: ChakraPseudoBoxProps;
  decrementStepperProps?: ChakraPseudoBoxProps;
}
