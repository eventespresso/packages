import type React from 'react';
import type { ModalProps } from '@eventespresso/adapters';

export interface NewEntityModalProps extends ModalProps {}

export interface NewEntityOptionProps {
	button?: React.ReactNode;
	className?: string;
	description?: React.ReactNode;
	icon?: React.ComponentType;
	title?: React.ReactNode;
}
