import React from 'react';
import { Modal as ChakraModal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/core';

import type { ModalProps } from './types';

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
	...props
}) => {
	return (
		<ChakraModal
			{...props}
			closeOnOverlayClick={isClosable}
			isCentered
			isOpen={isOpen}
			scrollBehavior={scrollBehavior}
		>
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
