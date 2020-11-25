import React from 'react';

import { useConfig } from '@eventespresso/services';
import { MoneyField } from './MoneyField';
import type { MoneyFieldProps } from './types';

import './style.scss';

interface Props extends Omit<MoneyFieldProps, 'sign' | 'signB4'> {}

export const MoneyFieldWithConfig: React.FC<Props> = (props) => {
	const config = useConfig();
	const currency = props.currency ?? config?.currency;

	const sign = currency?.sign;
	const signB4 = currency?.signB4;

	return <MoneyField {...props} sign={sign} signB4={signB4} />;
};
