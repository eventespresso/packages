import type { EditorState, DraftBlockType } from 'draft-js';
import type { FieldInputProps } from 'react-final-form';
import type { AnyObject } from 'final-form';

type toggleBlockType = (style: DraftBlockType) => void;

export interface RichTextEditorProps {
	input?: FieldInputProps<AnyObject>;
	onChange: (string) => void;
	readonly?: boolean;
	value?: string;
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
