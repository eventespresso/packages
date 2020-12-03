import type { IAlertDialog } from '@chakra-ui/react';

export interface AlertDialogProps extends Omit<IAlertDialog, 'children'> {
	body?: React.ReactNode;
	cancelButton: React.ReactNode;
	contentClassName?: string;
	header: React.ReactNode;
	okButton: React.ReactNode;
}
