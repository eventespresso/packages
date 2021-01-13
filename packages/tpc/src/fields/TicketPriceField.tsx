import { useCallback } from 'react';

import { useMoneyDisplay } from '@eventespresso/services';
import { parsedAmount } from '@eventespresso/utils';
import { useTPCDataState } from '@eventespresso/edtr-services';
import BaseField from './BaseField';
import { MoneyInputWithConfig } from './';
import type { BaseFieldProps, TicketPriceFieldProps } from './types';

type BFP = BaseFieldProps<number>;

const TicketPriceField: React.FC<TicketPriceFieldProps> = (props) => {
	const { ticket, updateTicketPrice } = useTPCDataState();
	const { formatAmount } = useMoneyDisplay();

	const format: BFP['format'] = useCallback((price) => formatAmount(price) ?? '', [formatAmount]);

	const getValue: BFP['getValue'] = useCallback(() => ticket?.price || 0, [ticket?.price]);

	const parse: BFP['parse'] = useCallback((price) => parsedAmount(price), []);

	const setValue: BFP['setValue'] = useCallback((value) => updateTicketPrice(parsedAmount(value)), [
		updateTicketPrice,
	]);

	return (
		<MoneyInputWithConfig disabled={props.disabled}>
			<BaseField
				{...props}
				format={format}
				getValue={getValue}
				name={'ticket.price'}
				parse={parse}
				setValue={setValue}
				type='number'
			/>
		</MoneyInputWithConfig>
	);
};

export default TicketPriceField;
