import type { EditorState, DraftBlockType } from 'draft-js';

type toggleBlockType = (style: DraftBlockType) => void;

export interface ToolbarControlsProps {
	editorState: EditorState;
	onToggleBlockType: toggleBlockType;
	onToggleInlineStyle: toggleBlockType;
	type?: 'simple' | 'advanced';
}

export interface BlockStyleControlsProps {
	editorState: EditorState;
	onToggle: toggleBlockType;
}

export interface InlineStyleControlsProps {
	editorState: EditorState;
	onToggle: toggleBlockType;
}
