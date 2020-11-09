export interface SimpleTextEditorModalProps {
	className?: string;
	onUpdate: (text: string) => void;
	text: string;
	title: string;
	tooltip: string;
}
