import React from 'react';

import { MoneyInputWrapper, MoneyInputWrapperProps } from '@eventespresso/components';
import { useConfig } from '@eventespresso/services';

interface Props extends Omit<MoneyInputWrapperProps, 'sign' | 'signB4'> {}

export const MoneyInputWithConfig: React.FC<Props> = (props) => {
	const config = useConfig();
	const currency = props.currency ?? config?.currency;

	const sign = currency?.sign;
	const signB4 = currency?.signB4;

	return <MoneyInputWrapper {...props} sign={sign} signB4={signB4} />;
};
