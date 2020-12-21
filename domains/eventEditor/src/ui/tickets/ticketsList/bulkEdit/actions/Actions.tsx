import React, { useState, useCallback, useMemo } from 'react';
import { useDisclosure } from '@chakra-ui/core';

import { __ } from '@eventespresso/i18n';
import { BulkActions, ErrorMessage } from '@eventespresso/components';
import { useMemoStringify } from '@eventespresso/hooks';
import { SOLD_TICKET_ERROR_MESSAGE } from '@eventespresso/tpc';
import { useTickets, useTicketsListFilterState } from '@eventespresso/edtr-services';
import { entitiesWithGuIdInArray, TicketsStatus } from '@eventespresso/predicates';
import type { BulkActionsProps } from '@eventespresso/components';
import { withFeature, useBulkEdit } from '@eventespresso/services';

import Checkbox from '../../tableView/Checkbox';
import { EditDetails } from '../details';
import { Delete } from '../delete';
import { EditPrices } from '../prices';

type Action = 'edit-details' | 'delete' | 'edit-prices' | '';

const Actions: React.FC = () => {
	const [action, setAction] = useState<Action>('');

	const { isOpen, onOpen, onClose } = useDisclosure();
	const { status } = useTicketsListFilterState();
	const { getSelected } = useBulkEdit();
	const allTickets = useTickets();

	const isEditPricesDisabled = useMemo(() => {
		const selectedTickets = entitiesWithGuIdInArray(allTickets, getSelected());
		const isSoldTicketSelected = selectedTickets.some((ticket) => Boolean(ticket.sold));
		return isSoldTicketSelected;
	}, [allTickets, getSelected]);

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
			disabled: isEditPricesDisabled,
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
			<BulkActions
				Checkbox={Checkbox}
				defaultAction=''
				id={'ee-bulk-edit-tickets-actions'}
				onApply={isEditPricesDisabled ? null : onApply}
				options={options}
			/>
			{isOpen && (
				<>
					{action === 'edit-details' && <EditDetails isOpen={true} onClose={onClose} />}
					{action === 'delete' && <Delete areTrashedTickets={areTrashedTickets} onClose={onClose} />}
					{action === 'edit-prices' && <EditPrices isOpen={true} onClose={onClose} />}
				</>
			)}

			<ErrorMessage message={isEditPricesDisabled && SOLD_TICKET_ERROR_MESSAGE} variant='subtle' />
		</>
	);
};

export default withFeature('use_bulk_edit')(Actions);
