import React from 'react';
import { Modal as ChakraModal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/core';

import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({
	bodyClassName,
	children,
	className,
	closeButton,
	footer,
	footerClassName,
	headerClassName,
	isClosable = true,
	isOpen,
	scrollBehavior = 'inside',
	title,
}) => {
	return (
		<ChakraModal closeOnOverlayClick={isClosable} isCentered isOpen={isOpen} scrollBehavior={scrollBehavior}>
			<ModalOverlay />
			<ModalContent role='alertdialog' className={className}>
				<ModalHeader className={headerClassName}>{title}</ModalHeader>

				{closeButton}

				<ModalBody className={bodyClassName}>{children}</ModalBody>

				{footer && <ModalFooter className={footerClassName}>{footer}</ModalFooter>}
			</ModalContent>
		</ChakraModal>
	);
};
