import React, { useState, useCallback } from 'react';
import { __ } from '@eventespresso/i18n';
import { useDisclosure } from '@chakra-ui/hooks';

import { BulkActions } from '@eventespresso/components';
import { useMemoStringify } from '@eventespresso/hooks';
import { useTicketsListFilterState, TicketsStatus } from '@edtrServices/filterState';
import type { BulkActionsProps } from '@eventespresso/components';
import { withFeature } from '@eventespresso/services';

import Checkbox from '../../tableView/Checkbox';
import { EditDetails } from '../details';
import { Delete } from '../delete';
import { EditPrices } from '../prices';

type Action = 'edit-details' | 'delete' | 'edit-prices' | '';

const Actions: React.FC = () => {
	const [action, setAction] = useState<Action>('');

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
		{
			value: 'edit-prices',
			label: __('edit ticket prices'),
		},
	]);

	const onApply = useCallback<BulkActionsProps<Action>['onApply']>(
		(action) => {
			setAction(action);
			onOpen();
		},
		[onOpen]
	);

	return (
		<>
			<BulkActions Checkbox={Checkbox} options={options} onApply={onApply} defaultAction='' />
			{isOpen && (
				<>
					{action === 'edit-details' && <EditDetails isOpen={true} onClose={onClose} />}
					{action === 'delete' && <Delete areTrashedTickets={areTrashedTickets} onClose={onClose} />}
					{action === 'edit-prices' && <EditPrices isOpen={true} onClose={onClose} />}
				</>
			)}
		</>
	);
};

export default withFeature('use_bulk_edit')(Actions);
