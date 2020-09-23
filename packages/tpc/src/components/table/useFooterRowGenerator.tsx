import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { FormatAmountFunction, parsedAmount } from '@eventespresso/utils';
import { Cell, FooterRow } from '@eventespresso/components';
import { TicketPriceField } from '../../fields';
import ReverseCalculateButton from '../../buttons/ReverseCalculateButton';

interface Props {
	formatAmount: FormatAmountFunction;
	reverseCalculate: boolean;
	toggleCalcDir: VoidFunction;
}

type FooterRowGenerator = (props: Props) => FooterRow;

const useFooterRowGenerator = (): FooterRowGenerator => {
	return useCallback<FooterRowGenerator>(({ formatAmount, reverseCalculate, toggleCalcDir }: Props) => {
		const cells: Array<Cell> = [
			{
				key: 'id',
				type: 'cell',
				className: '',
				value: '',
			},
			{
				key: 'type',
				type: 'cell',
				className: '',
				value: '',
			},
			{
				key: 'name',
				type: 'cell',
				className: '',
				value: '',
			},
			{
				key: 'description',
				type: 'cell',
				className: 'ee-ticket-price-calculator-total-label ee-number-column',
				value: __('Total'),
			},
			{
				key: 'amount',
				type: 'cell',
				className: 'ee-ticket-price-calculator__amount ee-ticket-price-calculator__total ee-number-column',
				value: (
					<TicketPriceField
						component='input'
						disabled={!reverseCalculate}
						// eslint-disable-next-line react/jsx-no-bind
						format={(price) => formatAmount(price) ?? ''}
						formatOnBlur
						// eslint-disable-next-line react/jsx-no-bind
						parse={(price) => parsedAmount(price)}
						type='number'
					/>
				),
			},
			{
				key: 'actions',
				type: 'cell',
				className: 'ee-ticket-price-calculator__actions',
				value: <ReverseCalculateButton reverseCalculate={reverseCalculate} toggleCalcDir={toggleCalcDir} />,
			},
		];

		return {
			cells,
			className: 'ee-ticket-price-calculator-total-row',
			key: 'price-total-row',
			primary: true,
			type: 'row',
		};
	}, []);
};

export default useFooterRowGenerator;
