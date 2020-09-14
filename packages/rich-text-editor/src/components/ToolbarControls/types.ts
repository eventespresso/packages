import type { EditorState, DraftBlockType } from 'draft-js';

type toggleBlockType = (style: DraftBlockType) => void;

export interface ToolbarControlsProps {
	editorState: EditorState;
	onToggleBlockType: toggleBlockType;
	onToggleInlineStyle: toggleBlockType;
}
