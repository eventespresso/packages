import React from 'react';

import { MoneyField, MoneyFieldProps } from '@eventespresso/components';
import { useConfig } from '@eventespresso/services';

interface Props extends Omit<MoneyFieldProps, 'sign' | 'signB4'> {}

export const MoneyFieldWithConfig: React.FC<Props> = (props) => {
	const config = useConfig();
	const currency = props.currency ?? config?.currency;

	const sign = currency?.sign;
	const signB4 = currency?.signB4;

	return <MoneyField {...props} sign={sign} signB4={signB4} />;
};
