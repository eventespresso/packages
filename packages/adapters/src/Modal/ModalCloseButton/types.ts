import type { CloseButtonProps as ChakraCloseButtonProps } from '@chakra-ui/core';

export interface ModalCloseButtonProps extends Partial<ChakraCloseButtonProps> {
	icon?: React.ComponentType<any>;
	onConfirm?: VoidFunction;
	tooltip?: string;
}
