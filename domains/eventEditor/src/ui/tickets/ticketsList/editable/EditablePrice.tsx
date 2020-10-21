import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import type { TicketItemProps } from '../types';
import { InlineEditCurrency } from '@eventespresso/components';
import useRecalculateBasePrice from '../../hooks/useRecalculateBasePrice';
import { useMemoStringify } from '@eventespresso/hooks';

interface EditablePriceProps extends TicketItemProps {
	className?: string;
}

const EditablePrice: React.FC<Partial<EditablePriceProps>> = ({ entity: ticket, className }) => {
	const recalculateBasePrice = useRecalculateBasePrice(ticket.id);
	const onChangePrice = useCallback(
		({ amount }: any): void => {
			const price = parseFloat(amount);
			if (price !== ticket.price) {
				recalculateBasePrice(price);
			}
		},
		[recalculateBasePrice, ticket.price]
	);

	const wrapperProps = useMemoStringify({ className });

	const isEditDisabled = Boolean(ticket.sold);

	const tooltip = isEditDisabled
		? __(
				'Ticket price modifications are blocked for Tickets that have already been sold to registrants, because doing so would negatively affect internal accounting for the event. If you still need to modify ticket prices, then create a copy of those tickets, edit the prices for the new tickets, and then archive the old tickets.'
		  )
		: __('edit ticket total…');

	return (
		<InlineEditCurrency
			id={ticket.id}
			amount={ticket.price}
			isEditDisabled={isEditDisabled}
			placeholder={__('set price…')}
			wrapperProps={wrapperProps}
			onChange={onChangePrice}
			tag={'h3'}
			tooltip={tooltip}
		/>
	);
};

export default EditablePrice;
