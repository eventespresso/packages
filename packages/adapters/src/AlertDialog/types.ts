import type { IAlertDialog } from '@chakra-ui/core';

export interface AlertDialogProps extends Omit<IAlertDialog, 'children'> {
	body?: React.ReactNode;
	cancelButton: React.ReactNode;
	contentClassName?: string;
	header: React.ReactNode;
	okButton: React.ReactNode;
}
