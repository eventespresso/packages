import React from 'react';
import classNames from 'classnames';

import { Modal as ModalAdapter, ModalCloseButton } from '@eventespresso/adapters';
import { Button } from '../';
import type { ModalProps } from './types';

import './styles.scss';

export const Modal: React.FC<ModalProps> = ({
	cancelButtonProps,
	children,
	closeOnEsc,
	closeOnOverlayClick,
	destroyOnClose,
	footerContent,
	isClosable = true,
	isOpen,
	onClose,
	scrollBehavior,
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

	const footer = footerContent ? (
		<>
			{cancelButton && cancelButton}
			{footerContent}
		</>
	) : (
		defaultFooterNode
	);

	const closeButton = props.closeButton || <ModalCloseButton size={null} isDisabled={!isClosable} />;

	return (
		<ModalAdapter
			bodyClassName={bodyClassName}
			className={className}
			closeButton={closeButton}
			closeOnEsc={closeOnEsc}
			closeOnOverlayClick={closeOnOverlayClick}
			footer={footer}
			footerClassName={footerClassName}
			headerClassName={headerClassName}
			isClosable={isClosable}
			isOpen={isOpen}
			onClose={onClose}
			scrollBehavior={scrollBehavior}
			title={title}
		>
			{children}
		</ModalAdapter>
	);
};
