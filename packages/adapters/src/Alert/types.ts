import type { AlertProps as ChakraAlertProps, IconProps } from '@chakra-ui/core';

export interface AlertProps extends ChakraAlertProps {
	description: string;
	iconProps?: IconProps;
}
