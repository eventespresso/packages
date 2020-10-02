import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { getPropsAreEqual, parsedAmount } from '@eventespresso/utils';
import { CurrencyInput, InlineEditText } from '@eventespresso/components';
import useRecalculateBasePrice from '../../hooks/useRecalculateBasePrice';
import { useMemoStringify } from '@eventespresso/hooks';
import type { TicketItemProps } from '../types';

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

	const onChangeHandler = useCallback(
		(value: string) => {
			const newAmount = parsedAmount(value);
			if (newAmount !== ticket.price) {
				onChangePrice({ amount: newAmount });
			}
		},
		[onChangePrice, ticket.price]
	);

	const input = useCallback(
		(formattedAmount: string) => (
			<InlineEditText
				as='span'
				fitText={false}
				id={ticket.id}
				onChangeValue={onChangeHandler}
				value={formattedAmount}
			/>
		),
		[onChangeHandler, ticket.id]
	);

	const wrapperProps = useMemoStringify({ className });

	return (
		<CurrencyInput
			amount={ticket.price}
			input={input}
			placeholder={__('set price...')}
			tag={'h3'}
			tooltip={__('edit ticket total...')}
			wrapperProps={wrapperProps}
		/>
	);
};

export default React.memo(EditablePrice, getPropsAreEqual(['entity', 'price']));
