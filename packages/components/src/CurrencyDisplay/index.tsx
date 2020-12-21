import React from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { useConfig, useMoneyDisplay } from '@eventespresso/services';
import { getCurrencySignCharacterCountClassName, getCurrencySignPositionClassName } from '@eventespresso/utils';
import { CurrencySign } from '../';
import type { CurrencyDisplayProps } from './types';

import './style.scss';

export const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({ value, vertical, ...props }) => {
	const config = useConfig();
	const { formatAmount } = useMoneyDisplay();

	const currency = config?.currency;
	const sign = currency?.sign;
	const signB4 = currency?.signB4;
	const signOutput = <CurrencySign sign={sign} />;

	const characters = getCurrencySignCharacterCountClassName(sign);
	const position = getCurrencySignPositionClassName(signB4);

	const className = classNames(
		'ee-currency-display',
		characters,
		position,
		vertical && 'ee-currency-display--vertical',
		props.className
	);

	return (
		<div className={className}>
			{value ? (
				<>
					{signB4 && signOutput}
					<span>{formatAmount(value)}</span>
					{!signB4 && signOutput}
				</>
			) : (
				__('free')
			)}
		</div>
	);
};
