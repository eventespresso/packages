import React from 'react';
import classNames from 'classnames';

import { useConfig } from '@eventespresso/services';
import { CurrencySign, getCurrencySignCharacterCountClassName } from '../';
import type { CurrencyDisplayProps } from './types';

import './style.scss';

export const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({ children, value, ...props }) => {
	const config = useConfig();
	const currency = config?.currency;
	const sign = currency?.sign;
	const signB4 = currency?.signB4;

	const characters = getCurrencySignCharacterCountClassName(sign);

	const className = classNames(
		props.className,
		characters,
		`ee-currency-display-sign--${signB4 ? 'before' : 'after'}`,
		'ee-currency-display'
	);

	return (
		<div className={className}>
			{signB4 && <CurrencySign sign={sign} />}
			<span>{value}</span>
			{!signB4 && <CurrencySign sign={sign} />}
		</div>
	);
};
