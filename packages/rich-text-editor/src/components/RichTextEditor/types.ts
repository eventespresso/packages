import { EditorProps } from 'react-draft-wysiwyg';

export interface RichTextEditorProps extends Omit<EditorProps, 'onChange'> {
	className?: string;
	defaultValue?: string;
	onChange: (string: string) => void;
	placeholder?: string;
	value?: string;
}
