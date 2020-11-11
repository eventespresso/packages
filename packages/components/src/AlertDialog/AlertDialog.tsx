import React from 'react';

import { AlertDialog as AlertDialogAdapter, AlertDialogProps } from '@eventespresso/adapters';

import './styles.scss';

export const AlertDialog: React.FC<AlertDialogProps> = ({
	body,
	cancelButton,
	header,
	isOpen,
	leastDestructiveRef,
	okButton,
	onClose,
}) => (
	<AlertDialogAdapter
		body={body}
		cancelButton={cancelButton}
		header={header}
		isOpen={isOpen}
		leastDestructiveRef={leastDestructiveRef}
		okButton={okButton}
		onClose={onClose}
	/>
);
