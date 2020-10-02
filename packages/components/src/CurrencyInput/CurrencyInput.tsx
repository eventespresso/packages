import React from 'react';
import classNames from 'classnames';

import { useMoneyDisplay } from '@eventespresso/services';
import type { CurrencyInputProps } from './types';

import './style.scss';

const CurrencyInput: React.FC<CurrencyInputProps> = ({ amount, input, tag = 'p', wrapperProps = {}, vertical }) => {
	const { beforeAmount, afterAmount, formatAmount } = useMoneyDisplay();
	const formattedAmount = formatAmount(amount);
	const className = classNames('ee-currency-input', vertical && 'ee-currency-input--vertical');
	const before = beforeAmount ? <span className={'ee-currency-input__before-amount'}>{beforeAmount} </span> : '';
	const after = afterAmount ? <span className={'ee-currency-input__after-amount'}> {afterAmount}</span> : '';
	const Wrapper = tag;

	return (
		<Wrapper {...wrapperProps} className={className}>
			{before}
			{input(formattedAmount)}
			{after}
		</Wrapper>
	);
};

export default CurrencyInput;
