export interface SimpleTextEditorModalProps {
	className?: string;
	isDisabled?: boolean;
	onUpdate: (text: string) => void;
	text: string;
	title: string;
	tooltip: string;
}
