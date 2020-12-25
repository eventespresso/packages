import React, { useEffect } from 'react';
import { __ } from '@eventespresso/i18n';

import { useConfirmationDialog } from '@eventespresso/ui-components';
import useOnDelete from './useOnDelete';
import { OnDeleteProps } from './types';

const Delete: React.FC<OnDeleteProps> = ({ areTrashedTickets, onClose }) => {
	const onDelete = useOnDelete({ areTrashedTickets, onClose });

	const { confirmationDialog, onOpen } = useConfirmationDialog({
		message: areTrashedTickets
			? __('Are you sure you want to permanently delete these tickets? This action can NOT be undone!')
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
