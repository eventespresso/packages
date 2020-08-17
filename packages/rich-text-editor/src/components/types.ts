import { EditorState } from 'draft-js';

export interface RichTextEditorProps {
	readonly?: boolean;
}

export interface RichTextEditorState {
	editorState: EditorState;
}
