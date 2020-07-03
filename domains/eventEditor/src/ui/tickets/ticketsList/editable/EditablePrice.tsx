import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import type { TicketItemProps } from '../types';
import { useTicketMutator } from '@eventespresso/edtr-services';
import { getPropsAreEqual } from '@eventespresso/services';
import { CurrencyInput } from '@eventespresso/components';
import useRecalculateBasePrice from '../../hooks/useRecalculateBasePrice';
import { useMemoStringify } from '@eventespresso/hooks';

interface EditablePriceProps extends TicketItemProps {
	className?: string;
}

const EditablePrice: React.FC<EditablePriceProps> = ({ entity: ticket, className }) => {
	const { updateEntity } = useTicketMutator(ticket.id);
	const recalculateBasePrice = useRecalculateBasePrice(ticket.id);
	const onChangePrice = useCallback(
		({ amount: price }: any): void => {
			price = parseFloat(price);
			if (price !== ticket.price) {
				updateEntity({ price, reverseCalculate: true });
				recalculateBasePrice();
			}
		},
		[recalculateBasePrice, ticket.price, updateEntity]
	);

	const wrapperProps = useMemoStringify({ className });

	return (
		<CurrencyInput
			id={ticket.id}
			amount={ticket.price}
			placeholder={__('set price...')}
			wrapperProps={wrapperProps}
			onChange={onChangePrice}
			tag={'h3'}
		/>
	);
};

export default React.memo(EditablePrice, getPropsAreEqual(['entity', 'price']));
