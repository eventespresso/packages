import React from 'react';

import BaseUIProvider from './BaseUIProvider';
import { AnyObject } from '@eventespresso/services';

const withBaseProvider = <Props extends AnyObject>(Component: React.ComponentType<Props>): React.FC<Props> => (
	props: Props
) => {
	return (
		<BaseUIProvider>
			<Component {...props} />
		</BaseUIProvider>
	);
};

export default withBaseProvider;
