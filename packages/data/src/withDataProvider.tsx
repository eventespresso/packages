import React from 'react';

import { DataProvider } from './DataProvider';
import type { AnyObject } from '@eventespresso/services';

const withDataProvider = <P extends AnyObject>(Component: React.ComponentType<P>): React.FC<P> => {
	const WrappedComponent: React.FC<P> = (props) => {
		return (
			<DataProvider>
				<Component {...props} />
			</DataProvider>
		);
	};

	return WrappedComponent;
};

export default withDataProvider;
