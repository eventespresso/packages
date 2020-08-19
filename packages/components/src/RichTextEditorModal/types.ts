export interface RichTextEditorModalProps {
	className?: string;
	onUpdate: (text: string) => void;
	text: string;
	textClassName: string;
	tooltip: string;
}
