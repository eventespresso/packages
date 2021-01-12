import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import type { AnyObject } from '@eventespresso/utils';

export const htmlToEditorState = (html: string): EditorState => {
	let state: EditorState;
	if (html) {
		const contentBlock = htmlToDraft(html);
		const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
		state = EditorState.createWithContent(contentState);
	}
	return state || EditorState.createEmpty();
};

export const editorStateToHtml = (editorState: EditorState): string => {
	return draftToHtml(convertToRaw(editorState.getCurrentContent()));
};

/**
 * Changes the style keys
 *
 * 'BOLD' => 'bold'
 * 'ITALIC', => 'italic'
 * 'CODE', => 'monospace'
 */
export const changeStyleKeys = (style: AnyObject) => {
	const newStyleObj = {};
	if (style) {
		for (const key in style) {
			const value = style[key];
			newStyleObj[key === 'CODE' ? 'monospace' : key.toLowerCase()] = value;
		}
		return newStyleObj;
	}
	return newStyleObj;
};
