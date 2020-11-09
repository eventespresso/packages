import React, { useCallback } from 'react';

import { Link } from '@eventespresso/icons';
import { useEditorState } from '../../hooks';
import StyleButton from '../StyleButton';
import { LinkControlProps } from './types';

const LinkControl: React.FC<LinkControlProps> = ({ inputRef, setIsVisible, setUrlValue }) => {
	const [editorState] = useEditorState();

	const promptForLink = useCallback(() => {
		const selection = editorState.getSelection();
		if (!selection.isCollapsed()) {
			const contentState = editorState.getCurrentContent();
			const startKey = editorState.getSelection().getStartKey();
			const startOffset = editorState.getSelection().getStartOffset();
			const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
			const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

			let url = '';
			if (linkKey) {
				const linkInstance = contentState.getEntity(linkKey);
				url = linkInstance.getData().url;
			}
			setIsVisible(true);
			setUrlValue(url);

			inputRef.current?.focus();
		}
	}, [editorState, inputRef, setIsVisible, setUrlValue]);

	return <StyleButton icon={<Link noMargin size='small' />} onToggle={promptForLink} />;
};

export default LinkControl;
