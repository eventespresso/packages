import React from 'react';
import {
	Modal as ChakraModal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';

import type { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({
	bodyClassName,
	children,
	className,
	closeButton,
	footer,
	footerClassName,
	headerClassName,
	isClosable,
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
				<ModalHeader className={headerClassName}>
					{title}
					{closeButton}
				</ModalHeader>

				<ModalBody className={bodyClassName}>{children}</ModalBody>

				{footer && <ModalFooter className={footerClassName}>{footer}</ModalFooter>}
			</ModalContent>
		</ChakraModal>
	);
};
