import React, { useEffect } from 'react';
import { __ } from '@eventespresso/i18n';

import { useConfirmationDialog } from '@eventespresso/ui-components';
import useOnDelete from './useOnDelete';
import { OnDeleteProps } from './types';

const Delete: React.FC<OnDeleteProps> = ({ areTrashedDates, onClose }) => {
	const onDelete = useOnDelete({ areTrashedDates, onClose });

	const { confirmationDialog, onOpen } = useConfirmationDialog({
		message: areTrashedDates
			? __('Are you sure you want to permanently delete these datetimes? This action can NOT be undone!')
			: __('Are you sure you want to trash these datetimes?'),
		title: areTrashedDates ? __('Delete datetimes permanently') : __('Trash datetimes'),
		onConfirm: onDelete,
		onCancel: onClose,
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => onOpen(), []);

	return <>{confirmationDialog}</>;
};

export default Delete;
