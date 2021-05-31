import type { PopoverProps } from '../Popover';

export type PopoverFormTriggerProps = {
	onOpen: VoidFunction;
	className?: string;
};

export interface PopoverFormProps extends PopoverProps {
	className?: string;
	content?: React.ReactNode;
	isSubmitDisabled?: boolean;
	onClose?: VoidFunction;
	onSubmit?: VoidFunction;
	submitLabel?: string;
	title: string;
	renderTrigger: (props: PopoverFormTriggerProps) => JSX.Element;
}
