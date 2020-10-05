import { IModal } from '@chakra-ui/core';

export interface ModalProps
	extends Pick<IModal, 'closeOnOverlayClick' | 'closeOnEsc' | 'isOpen' | 'onClose' | 'scrollBehavior'> {
	bodyClassName?: string;
	className?: string;
	closeButton?: React.ReactNode;
	footer?: React.ReactNode;
	footerClassName?: string;
	isClosable?: boolean;
	headerClassName?: string;
	title?: React.ReactNode;
}
