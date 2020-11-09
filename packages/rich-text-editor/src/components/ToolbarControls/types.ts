import type { EditorState } from 'draft-js';
import { RichTextEditorProps } from '../RichTextEditor';
import { ToggleBlockType } from '../types';

export interface ToolbarControlsProps {
	type?: RichTextEditorProps['type'];
}

export interface BaseControlProps {
	editorState: EditorState;
	onToggle: ToggleBlockType;
}
