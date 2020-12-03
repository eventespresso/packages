import React from 'react';
import {
	AlertDialog as ChakraAlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
} from '@chakra-ui/react';

import type { AlertDialogProps } from './types';

export const AlertDialog: React.FC<AlertDialogProps> = ({
	body,
	cancelButton,
	contentClassName,
	header,
	isOpen,
	leastDestructiveRef,
	onClose,
	okButton,
}) => (
	<ChakraAlertDialog isOpen={isOpen} leastDestructiveRef={leastDestructiveRef} onClose={onClose}>
		<AlertDialogOverlay />
		<AlertDialogContent className={contentClassName}>
			{header && <AlertDialogHeader className={'ee-alert-dialog__header'}>{header}</AlertDialogHeader>}
			<AlertDialogBody className={'ee-alert-dialog__body'}>{body}</AlertDialogBody>
			<AlertDialogFooter className={'ee-alert-dialog__footer'}>
				{cancelButton}
				{okButton}
			</AlertDialogFooter>
		</AlertDialogContent>
	</ChakraAlertDialog>
);
