import React from 'react';
import classNames from 'classnames';

import { getCurrencySignPositionClassName } from '@eventespresso/utils';
import { useConfig } from '@eventespresso/services';
import { CurrencySign, PercentSign } from '../';

type Props = {
	isPercent: boolean;
};

export const PriceTypeSign: React.FC<Props> = ({ isPercent }) => {
	const config = useConfig();
	const sign = config?.currency?.sign;
	const signB4 = config?.currency?.signB4;

	const currencySignPositionClassName = getCurrencySignPositionClassName(signB4);

	const className = classNames(currencySignPositionClassName);

	return isPercent ? <PercentSign className={className} /> : <CurrencySign sign={sign} />;
};
