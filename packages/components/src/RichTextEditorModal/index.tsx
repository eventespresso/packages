import React, { useCallback, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/hooks';

import { TabbableText, ModalWithAlert } from '../';
import { RichTextEditor } from '@eventespresso/rich-text-editor';

import type { RichTextEditorModalProps } from './types';

import './style.scss';

export const RichTextEditorModal: React.FC<RichTextEditorModalProps> = ({ onUpdate, textClassName, ...props }) => {
	const [text, setDescription] = useState(props.text);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const onCancel = useCallback((): void => {
		setDescription(props.text);
		onClose();
	}, [onClose, props.text]);

	const onChange = useCallback((desc: string): void => {
		setDescription(desc);
	}, []);

	const onSubmit = useCallback((): void => {
		if (text !== props.text) {
			onUpdate(text);
		}
	}, [text, props.text, onUpdate]);

	const tooltip = __('edit text...');

	return (
		<>
			<ModalWithAlert
				className='ee-rich-content-text-modal'
				isOpen={isOpen}
				onCancel={onCancel}
				onClose={onCancel}
				onSubmit={onSubmit}
				showAlertOnEscape={text !== props.text}
				title={__('Edit text')}
			>
				<RichTextEditor onChange={onChange} value={props.text} />
			</ModalWithAlert>
			<TabbableText
				richTextContent
				className={textClassName}
				onClick={onOpen}
				tooltip={tooltip}
				text={props.text}
			/>
		</>
	);
};
