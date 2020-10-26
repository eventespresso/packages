import { ModalProps as ChakraModalProps } from '@chakra-ui/modal';
export type { CloseButtonProps as ModalCloseButtonProps } from '@chakra-ui/close-button';

export interface ModalProps
	extends Pick<ChakraModalProps, 'closeOnOverlayClick' | 'closeOnEsc' | 'isOpen' | 'onClose' | 'scrollBehavior'> {
	bodyClassName?: string;
	className?: string;
	closeButton?: React.ReactNode;
	footer?: React.ReactNode;
	footerClassName?: string;
	isClosable?: boolean;
	headerClassName?: string;
	title?: React.ReactNode;
}
