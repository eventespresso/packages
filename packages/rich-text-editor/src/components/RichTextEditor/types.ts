export interface RichTextEditorProps {
	'aria-label'?: string;
	className?: string;
	onChange: (string: string) => void;
	placeholder?: string;
	type?: 'simple' | 'advanced';
	value?: string;
}
