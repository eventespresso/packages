import type { AlertDialogProps as AlertDialogAdapterProps, AlertIconProps } from '@chakra-ui/react';

export interface AlertDialogProps extends Omit<AlertDialogAdapterProps, 'children'> {
	body?: React.ReactNode;
	cancelButton: React.ReactNode;
	contentClassName?: string;
	header: React.ReactNode;
	okButton: React.ReactNode;
}

export type { AlertIconProps };
