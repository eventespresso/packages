import React, { useCallback, useState } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';

import { TabbableText, ModalWithAlert } from '../';
import { RichTextEditor } from '@eventespresso/rich-text-editor';

import type { RichTextEditorModalProps } from './types';

import './style.scss';

export const RichTextEditorModal: React.FC<RichTextEditorModalProps> = ({
	onUpdate,
	textClassName,
	title,
	tooltip,
	...props
}) => {
	const [text, setText] = useState(props.text);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const onChange = useCallback((str: string): void => {
		setText(str);
	}, []);

	const onSubmit = useCallback((): void => {
		if (text !== props.text) {
			onUpdate(text);
		}
	}, [text, props.text, onUpdate]);

	return (
		<>
			<ModalWithAlert
				className='ee-rich-text-editor-modal'
				isOpen={isOpen}
				onCancel={onClose}
				onClose={onClose}
				onSubmit={onSubmit}
				showAlertOnEscape={text !== props.text}
				title={title}
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
