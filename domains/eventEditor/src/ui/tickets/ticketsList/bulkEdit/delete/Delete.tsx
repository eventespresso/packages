import React, { useEffect } from 'react';
import { __ } from '@wordpress/i18n';

import { useConfirmationDialog } from '@eventespresso/components';
import useOnDelete from './useOnDelete';
import { OnDeleteProps } from './types';

const Delete: React.FC<OnDeleteProps> = ({ areTrashedTickets, onClose }) => {
	const onDelete = useOnDelete({ areTrashedTickets, onClose });

	const { confirmationDialog, onOpen } = useConfirmationDialog({
		message: areTrashedTickets
			? __('Are you sure you want to delete these tickets premanently?')
			: __('Are you sure you want to trash these tickets?'),
		title: areTrashedTickets ? __('Delete tickets permanently') : __('Trash tickets'),
		onConfirm: onDelete,
		onCancel: onClose,
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => onOpen(), []);

	return <>{confirmationDialog}</>;
};

export default Delete;
