import type { CloseButtonProps as ChakraCloseButtonProps } from '@chakra-ui/core';
import { ButtonProps } from '../../Button/types';

type BP = Partial<Omit<ButtonProps, 'size' | 'type'>>;

export interface ModalCloseButtonProps extends BP, Partial<ChakraCloseButtonProps> {
	buttonProps?: BP;
	icon?: React.ComponentType<any>;
	tooltip?: string;
}
