import React from 'react';
import classNames from 'classnames';

import { Modal as ModalAdapter, ModalCloseButton } from '@eventespresso/adapters';
import { Button } from '../';
import { modalCloseButtonProps } from './';
import type { ModalProps } from './types';

import './styles.scss';

export const Modal: React.FC<ModalProps> = ({
	cancelButtonProps,
	children,
	destroyOnClose,
	footerContent,
	isClosable,
	isOpen,
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

	const closeButton = props.closeButton || (
		<ModalCloseButton {...modalCloseButtonProps} size={null} isDisabled={!isClosable} />
	);

	return (
		<ModalAdapter
			bodyClassName={bodyClassName}
			className={className}
			closeButton={closeButton}
			footer={footer}
			footerClassName={footerClassName}
			headerClassName={headerClassName}
			isClosable={isClosable}
			isOpen={isOpen}
			scrollBehavior={scrollBehavior}
			title={title}
		>
			{children}
		</ModalAdapter>
	);
};
