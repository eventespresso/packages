import { EditorProps } from 'react-draft-wysiwyg';

export interface ToolbarButtonProps {
	onChange?: EditorProps['onEditorStateChange'];
	editorState?: EditorProps['editorState'];
}
