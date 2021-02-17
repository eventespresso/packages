import { EditorProps } from 'react-draft-wysiwyg';

export interface RichTextEditorProps extends Omit<EditorProps, 'onChange'> {
	className?: string;
	defaultValue?: string;
	isDisabled?: boolean;
	onChange?: (string: string) => void;
	onChangeValue?: (string: string) => void;
	placeholder?: string;
	value?: string;
}
