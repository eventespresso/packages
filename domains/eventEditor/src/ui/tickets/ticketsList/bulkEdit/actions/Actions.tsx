import React, { useState, useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/hooks';

import { BulkActions, BulkActionsProps } from '@eventespresso/components';
import { useMemoStringify } from '@eventespresso/hooks';

import { useTicketsListFilterState, TicketsStatus } from '@edtrServices/filterState';
import { EditDetails } from '../details';
import { Delete } from '../delete';

const Actions: React.FC = () => {
	const [action, setAction] = useState('');

	const { isOpen, onOpen, onClose } = useDisclosure();
	const { status } = useTicketsListFilterState();

	const areTrashedTickets = status === TicketsStatus.trashedOnly;

	const options = useMemoStringify([
		{
			value: '',
			label: __('bulk actions'),
		},
		{
			value: 'edit-details',
			label: __('edit ticket details'),
		},
		{
			value: 'delete',
			label: areTrashedTickets ? __('delete tickets') : __('trash tickets'),
		},
	]);

	const onApply = useCallback<BulkActionsProps['onApply']>(
		(action) => {
			setAction(action);
			onOpen();
		},
		[onOpen]
	);

	return (
		<>
			<BulkActions options={options} onApply={onApply} defaultAction='' />
			{isOpen && (
				<>
					{action === 'edit-details' && <EditDetails isOpen={true} onClose={onClose} />}
					{action === 'delete' && <Delete areTrashedTickets={areTrashedTickets} onClose={onClose} />}
				</>
			)}
		</>
	);
};

export default Actions;
