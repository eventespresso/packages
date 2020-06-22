import React from 'react';
import classNames from 'classnames';

import CurrencySign from './CurrencySign';
import { getCurrencySignPositionClassName } from './utils';
import PercentSign from './PercentSign';
import { useConfig } from '@eventespresso/services';
import { PriceType } from '@eventespresso/edtr-services';

type Props = {
	priceType: PriceType;
};

const PriceTypeSign: React.FC<Props> = ({ priceType }) => {
	const config = useConfig();
	const sign = config?.currency?.sign;
	const signB4 = config?.currency?.signB4;

	const currencySignPositionClassName = getCurrencySignPositionClassName(signB4);

	const className = classNames(currencySignPositionClassName);

	return priceType.isPercent ? <PercentSign className={className} /> : <CurrencySign sign={sign} />;
};

export default PriceTypeSign;
