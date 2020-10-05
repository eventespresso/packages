import React from 'react';
import classNames from 'classnames';
import {
	Modal as ChakraModal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/core';

import { Button } from '../';
import { modalCloseButtonProps } from './';
import type { ModalProps } from '@eventespresso/adapters';

import './styles.scss';

export const Modal: React.FC<ModalProps> = ({
	cancelButtonProps,
	children,
	closeButton,
	content,
	destroyOnClose = true,
	footerContent,
	isClosable = true,
	isOpen,
	scrollBehavior = 'inside',
	submitButtonProps,
	title,
	withBorder,
	...props
}) => {
	if (destroyOnClose && !isOpen) {
		return null;
	}

	const className = classNames(props.className, 'ee-modal');
	const headerClassName = classNames(withBorder && 'ee-modal--with-border', 'ee-modal__header');
	const bodyClassName = classNames(props.bodyClassName, 'ee-modal__body');
	const footerClassName = classNames(withBorder && 'ee-modal--with-border', 'ee-modal__footer');

	const cancelButton = cancelButtonProps && <Button mr={3} {...cancelButtonProps} />;
	const submitButton = submitButtonProps && <Button variantColor='blue' {...submitButtonProps} />;
	const defaultFooterNode = (cancelButton || submitButton) && (
		<>
			{cancelButton}
			{submitButton}
		</>
	);

	const footerNode = footerContent ? (
		<>
			{cancelButton && cancelButton}
			{footerContent}
		</>
	) : (
		defaultFooterNode
	);

	return (
		<ChakraModal
			closeOnOverlayClick={isClosable}
			isCentered
			isOpen={isOpen}
			scrollBehavior={scrollBehavior}
			{...props}
		>
			<ModalOverlay />
			<ModalContent role='alertdialog' className={className}>
				<ModalHeader className={headerClassName}>{title}</ModalHeader>

				{closeButton || <ModalCloseButton {...modalCloseButtonProps} size={null} isDisabled={!isClosable} />}

				<ModalBody className={bodyClassName}>{children || content}</ModalBody>

				{footerNode && <ModalFooter className={footerClassName}>{footerNode}</ModalFooter>}
			</ModalContent>
		</ChakraModal>
	);
};
