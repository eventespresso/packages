import React, { useCallback } from 'react';
import { EditorState, RichUtils } from 'draft-js';

import { __ } from '@eventespresso/i18n';
import { UrlInputProps } from './types';
import { isEnterKey } from '../../../../utils/src/keycodes';
import { useEditorState } from '../../hooks';

const containerStyle = {
	marginBottom: 10,
};

const inputStyle = {
	fontFamily: "'Georgia', serif",
	marginRight: 10,
	padding: 3,
};

const UrlInput: React.FC<UrlInputProps> = ({ inputRef, editorRef, setIsVisible, setUrlValue, urlValue }) => {
	const [editorState, updateEditorState] = useEditorState();

	const confirmLink = useCallback(
		(event) => {
			event.preventDefault();
			const contentState = editorState.getCurrentContent();
			const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', { href: urlValue });
			const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

			const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
			updateEditorState(RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey));

			setIsVisible(false);
			setUrlValue('');

			editorRef.current?.focus();
		},
		[editorRef, editorState, setIsVisible, setUrlValue, updateEditorState, urlValue]
	);

	const onChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setUrlValue(event.target.value);
		},
		[setUrlValue]
	);

	const onKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>) => {
			if (isEnterKey(event)) {
				confirmLink(event);
			}
		},
		[confirmLink]
	);

	return (
		<div style={containerStyle}>
			<input
				onChange={onChange}
				ref={inputRef}
				style={inputStyle}
				type='text'
				value={urlValue}
				onKeyDown={onKeyDown}
			/>
			<button onMouseDown={confirmLink}>{__('Confirm')}</button>
		</div>
	);
};

export default UrlInput;
