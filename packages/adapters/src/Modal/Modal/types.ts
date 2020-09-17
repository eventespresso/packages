import type React from 'react';
import type { Modal } from '@chakra-ui/core';
import type { ButtonProps } from '../../Button';

export interface ModalProps extends React.ComponentProps<typeof Modal> {
	bodyClassName?: string;
	cancelButtonProps?: ButtonProps;
	className?: string;
	closeButton?: React.ReactNode;
	content?: React.ReactNode;
	destroyOnClose?: boolean;
	footerContent?: React.ReactNode;
	isClosable?: boolean;
	submitButtonProps?: ButtonProps;
	title?: React.ReactNode;
	withBorder?: boolean;
}
