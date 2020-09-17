import type { CloseButtonProps as ChakraCloseButtonProps } from '@chakra-ui/core';
import { ButtonProps } from '../../Button/types';

export interface ModalCloseButtonProps
	extends Partial<Omit<ButtonProps, 'size' | 'type'>>,
		Partial<ChakraCloseButtonProps> {
	icon?: React.ComponentType<any>;
	onConfirm?: VoidFunction;
	tooltip?: string;
}
