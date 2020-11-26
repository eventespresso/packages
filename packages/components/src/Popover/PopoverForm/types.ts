import type React from 'react';

import type { ButtonProps } from '../../Button';

export interface PopoverFormProps {
	className?: string;
	content: React.ReactNode;
	isSubmitDisabled?: boolean;
	onClose?: VoidFunction;
	onSubmit?: VoidFunction;
	submitLabel?: string;
	triggerText?: string;
	title: string;
	triggerProps?: ButtonProps;
}
