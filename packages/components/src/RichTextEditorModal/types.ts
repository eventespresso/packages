export interface RichTextEditorModalProps {
	className?: string;
	onUpdate: (text: string) => void;
	text: string;
	title: string;
	tooltip: string;
}
