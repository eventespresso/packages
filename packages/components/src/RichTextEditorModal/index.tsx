import React, { useCallback, useState, useMemo } from 'react';
import classNames from 'classnames';
import { useDisclosure } from '@chakra-ui/hooks';

import { Dotdotdot } from '@eventespresso/adapters';
import { Edit } from '@eventespresso/icons';
import { RichTextEditor } from '@eventespresso/rich-text-editor';

import { TabbableText, ModalWithAlert } from '../';
import type { RichTextEditorModalProps } from './types';

import './style.scss';

export const RichTextEditorModal: React.FC<RichTextEditorModalProps> = ({
	className,
	onUpdate,
	title,
	tooltip,
	...props
}) => {
	const [text, setText] = useState(props.text);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const hasChanges = text !== props.text;
	const previewClassName = classNames('ee-inline-edit__preview', className && className);

	const onChange = useCallback(
		(newText: string): void => {
			newText = newText !== '<p></p>' ? newText : '';
			setText(newText);
		},
		[setText]
	);

	const onSubmit = useCallback((): void => {
		if (hasChanges) {
			onUpdate(text);
		}
		onClose();
	}, [onClose, onUpdate, hasChanges, text]);

	const onCancel = useCallback((): void => {
		// restore the initial text for preview
		setText(props.text);
		onClose();
	}, [onClose, props.text]);

	const previewProps = useMemo(() => {
		return { dangerouslySetInnerHTML: { __html: text } };
	}, [text]);

	const preview = (
		<Dotdotdot clamp={4}>
			<div {...previewProps} />
		</Dotdotdot>
	);

	return (
		<>
			<ModalWithAlert
				className='ee-rich-text-editor-modal'
				isOpen={isOpen}
				onCancel={onCancel}
				onClose={onCancel}
				onSubmit={onSubmit}
				showAlertOnEscape={hasChanges}
				title={title}
			>
				<RichTextEditor onChange={onChange} value={text} />
			</ModalWithAlert>
			<div className='ee-rich-text-editor__preview'>
				<TabbableText
					className={previewClassName}
					icon={<Edit className={'ee-inline-edit__edit-icon'} />}
					onClick={onOpen}
					text={preview}
					tooltip={tooltip}
				/>
			</div>
		</>
	);
};
