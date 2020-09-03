import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useDisclosure } from '@chakra-ui/hooks';

import { TabbableText, ModalWithAlert } from '../';
import { Edit } from '@eventespresso/icons';
import { RichTextEditor } from '@eventespresso/rich-text-editor';

import type { RichTextEditorModalProps } from './types';

import './style.scss';

export const RichTextEditorModal: React.FC<RichTextEditorModalProps> = ({
	className,
	onUpdate,
	title,
	tooltip,
	...props
}) => {
	const initialText = props.text === tooltip ? '' : props.text;
	console.log('%c RichTextEditorModal text', 'color: DarkOrchid;', props.text, initialText);
	const [text, setText] = useState(initialText);
	const hasChanges = text !== props.text;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const previewClassName = classNames('ee-inline-edit__preview-wrapper', className && className);

	const onChange = useCallback(
		(newText: string): void => {
			newText = newText !== '<p></p>' ? newText : '';
			setText(newText);
			console.log('%c RichTextEditorModal text update', 'color: DeepPink;', newText);
		},
		[setText]
	);

	const onSubmit = useCallback((): void => {
		if (hasChanges) {
			onUpdate(text);
			onClose();
		}
	}, [onClose, onUpdate, hasChanges, text]);

	return (
		<>
			<ModalWithAlert
				className='ee-rich-text-editor-modal'
				isOpen={isOpen}
				onCancel={onClose}
				onClose={onClose}
				onSubmit={onSubmit}
				showAlertOnEscape={hasChanges}
				title={title}
			>
				<RichTextEditor onChange={onChange} value={text} />
			</ModalWithAlert>
			<div className='ee-rich-text-editor__preview-wrapper'>
				<TabbableText
					className={previewClassName}
					icon={<Edit className={'ee-inline-edit__edit-icon'} />}
					onClick={onOpen}
					richTextContent
					text={text}
					tooltip={tooltip}
				/>
			</div>
		</>
	);
};
