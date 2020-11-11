import type React from 'react';
import type {
	ButtonProps as ChakraButtonProps,
	ButtonGroupProps as ChakraButtonGroupProps,
	IconButtonProps as ChakraIconButtonProps,
} from '@chakra-ui/core';
import type { Size } from '../types';

export interface ButtonProps extends Partial<Omit<ChakraButtonProps, 'color' | 'size'>>, Size {
	buttonText?: React.ReactNode;
	icon?: React.ComponentType<any>;
}

export interface ButtonGroupProps extends Omit<ChakraButtonGroupProps, 'size'>, Size {}

export interface IconButtonProps extends ChakraIconButtonProps {
	icon?: React.ComponentType<any>;
}
