import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import type { TicketItemProps } from '../types';
import { getPropsAreEqual } from '@eventespresso/utils';
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

	return (
		<InlineEditCurrency
			id={ticket.id}
			amount={ticket.price}
			placeholder={__('set price...')}
			wrapperProps={wrapperProps}
			onChange={onChangePrice}
			tag={'h3'}
			tooltip={__('edit ticket total...')}
		/>
	);
};

export default React.memo(EditablePrice, getPropsAreEqual(['entity', 'price']));
