import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { getPropsAreEqual, parsedAmount } from '@eventespresso/utils';
import { CurrencyInput, InlineEditText } from '@eventespresso/components';
import useRecalculateBasePrice from '../../hooks/useRecalculateBasePrice';
import { useMemoStringify } from '@eventespresso/hooks';
import type { EditablePriceProps } from '../types';

const EditablePrice: React.FC<Partial<EditablePriceProps>> = ({ className, id, price, ...props }) => {
	const recalculateBasePrice = useRecalculateBasePrice(id);
	const onChangePrice = useCallback(
		({ amount }: any): void => {
			const parsedPrice = parseFloat(amount);
			if (parsedPrice !== price) {
				recalculateBasePrice(price);
			}
		},
		[price, recalculateBasePrice]
	);

	const onChangeHandler = useCallback(
		(value: string) => {
			const newAmount = parsedAmount(value);
			if (newAmount !== price) {
				onChangePrice({ amount: newAmount });
			}
		},
		[onChangePrice, price]
	);

	const input = useCallback(
		(formattedAmount: string) => (
			<InlineEditText as='span' fitText={false} id={id} onChangeValue={onChangeHandler} value={formattedAmount} />
		),
		[id, onChangeHandler]
	);

	const wrapperProps = useMemoStringify({ className });

	return (
		<CurrencyInput
			{...props}
			amount={price}
			input={input}
			placeholder={__('set price...')}
			tag={'h3'}
			tooltip={__('edit ticket total...')}
			wrapperProps={wrapperProps}
		/>
	);
};

export default React.memo(EditablePrice, getPropsAreEqual(['entity', 'price']));
