import React from 'react';
import classNames from 'classnames';

import { useConfig, useMoneyDisplay } from '@eventespresso/services';
import { getCurrencySignCharacterCountClassName, getCurrencySignPositionClassName } from '@eventespresso/utils';
import { CurrencySign } from '../';
import type { CurrencyDisplayProps } from './types';

import './style.scss';

export const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({ children, value, ...props }) => {
	const config = useConfig();
	const { formatAmount } = useMoneyDisplay();

	const currency = config?.currency;
	const sign = currency?.sign;
	const signB4 = currency?.signB4;

	const characters = getCurrencySignCharacterCountClassName(sign);
	const position = getCurrencySignPositionClassName(signB4);

	const className = classNames(props.className, characters, position, 'ee-currency-display');

	return (
		<div className={className}>
			{signB4 && <CurrencySign sign={sign} />}
			<span>{formatAmount(value)}</span>
			{!signB4 && <CurrencySign sign={sign} />}
		</div>
	);
};
