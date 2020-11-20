export interface InlineMessageProps {
	className?: string;
	icon?: JSX.Element;
	id?: string;
	message?: string;
	type?: 'error' | 'info' | 'success' | 'warning';
	variant?: 'subtle' | 'solid';
}
