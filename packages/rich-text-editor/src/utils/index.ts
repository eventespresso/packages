import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export const htmlToEditorState = (html: string): EditorState => {
	let state: EditorState;
	if (html) {
		const contentBlock = htmlToDraft(html);
		const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
		state = EditorState.createWithContent(contentState);
	}
	return state;
};

export const editorStateToHtml = (editorState: EditorState): string => {
	return draftToHtml(convertToRaw(editorState.getCurrentContent()));
};

export * from './getBlockStyle';
