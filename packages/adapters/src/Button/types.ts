import type React from 'react';
import type {
	ButtonProps as ChakraButtonProps,
	ButtonGroupProps as ChakraButtonGroupProps,
	IconButtonProps as ChakraIconButtonProps,
} from '@chakra-ui/react';

export interface ButtonProps extends Partial<Omit<ChakraButtonProps, 'color'>> {
	buttonText?: React.ReactNode;
	icon?: React.ComponentType<any>;
}

export interface ButtonGroupProps extends ChakraButtonGroupProps {}

export interface IconButtonProps extends Omit<ChakraIconButtonProps, 'icon'> {
	icon?: React.ComponentType<any>;
}
