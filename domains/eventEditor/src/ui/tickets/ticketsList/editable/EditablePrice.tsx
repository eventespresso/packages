import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { InlineEditCurrency } from '@eventespresso/components';
import { useMemoStringify } from '@eventespresso/hooks';
import { useMoneyDisplay } from '@eventespresso/services';
import { SOLD_TICKET_ERROR_MESSAGE } from '@eventespresso/tpc';
import useRecalculateBasePrice from '../../hooks/useRecalculateBasePrice';
import type { TicketItemProps } from '../types';

interface EditablePriceProps extends TicketItemProps {
	className?: string;
}

const EditablePrice: React.FC<Partial<EditablePriceProps>> = ({ entity: ticket, className }) => {
	const { afterAmount, beforeAmount, formatAmount } = useMoneyDisplay();
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

	const tooltip = isEditDisabled ? SOLD_TICKET_ERROR_MESSAGE : __('edit ticket total…');

	return (
		<InlineEditCurrency
			afterAmount={afterAmount}
			amount={ticket.price}
			beforeAmount={beforeAmount}
			formatAmount={formatAmount}
			id={ticket.id}
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
