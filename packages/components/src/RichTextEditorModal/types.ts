export interface RichTextEditorModalProps {
	className?: string;
	onUpdate: (text: string) => void;
	text: string;
	textClassName: string;
	title: string;
	tooltip: string;
}
