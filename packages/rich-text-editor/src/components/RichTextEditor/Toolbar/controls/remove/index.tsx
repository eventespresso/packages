import { useCallback } from 'react';
import { EditorState, Modifier } from 'draft-js';
import { getSelectionCustomInlineStyle } from 'draftjs-utils';

import { ToolbarControlProps } from '../../types';
import { useEditorState } from '../../../../../hooks';
import defaultComponent from './Component';

const INLINE_STYLES = ['BOLD', 'ITALIC', 'UNDERLINE', 'STRIKETHROUGH', 'MONOSPACE', 'SUPERSCRIPT', 'SUBSCRIPT'];
const CUSTOM_STYLES = ['FONTSIZE', 'FONTFAMILY', 'COLOR', 'BGCOLOR'];

const Remove: React.FC<ToolbarControlProps<'remove'>> = (props) => {
	const [editorState, setEditorState] = useEditorState();

	const removeAllInlineStyles = useCallback(() => {
		let contentState = editorState.getCurrentContent();
		INLINE_STYLES.forEach((style) => {
			contentState = Modifier.removeInlineStyle(contentState, editorState.getSelection(), style);
		});
		const customStyles = getSelectionCustomInlineStyle(editorState, CUSTOM_STYLES);
		for (const key in customStyles) {
			const value = customStyles[key];
			contentState = Modifier.removeInlineStyle(contentState, editorState.getSelection(), value);
		}

		const newState = EditorState.push(editorState, contentState, 'change-inline-style');

		setEditorState(newState);
	}, [editorState, setEditorState]);

	const Component = props.config.component || defaultComponent;
	return <Component {...props} onChange={removeAllInlineStyles} />;
};

export default Remove;
