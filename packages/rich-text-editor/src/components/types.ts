import { EditorState, DraftBlockType } from 'draft-js';

type toggleBlockType = (style: DraftBlockType) => void;

export interface RichTextEditorProps {
	readonly?: boolean;
}

export interface RichTextEditorState {
	editorState: EditorState;
}

export interface StyleButtonProps {
	active: boolean;
	label: string;
	onToggle: toggleBlockType;
	style: DraftBlockType;
}

export interface BlockStyleControlsProps {
	editorState: EditorState;
	onToggle: toggleBlockType;
}

export interface InlineStyleControlsProps {
	editorState: EditorState;
	onToggle: toggleBlockType;
}
