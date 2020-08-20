import React from 'react';
import classNames from 'classnames';

import CurrencySign from './CurrencySign';
import { getCurrencySignPositionClassName } from './utils';
import PercentSign from './PercentSign';
import { useConfig } from '@eventespresso/services';

type Props = {
	isPercent: boolean;
};

const PriceTypeSign: React.FC<Props> = ({ isPercent }) => {
	const config = useConfig();
	const sign = config?.currency?.sign;
	const signB4 = config?.currency?.signB4;

	const currencySignPositionClassName = getCurrencySignPositionClassName(signB4);

	const className = classNames(currencySignPositionClassName);

	return isPercent ? <PercentSign className={className} /> : <CurrencySign sign={sign} />;
};

export default PriceTypeSign;
