export interface BaseProps {
	isOpen?: boolean;
	onClose?: VoidFunction;
	onSubmit?: () => Promise<void>;
}
