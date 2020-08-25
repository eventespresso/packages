import React from 'react';

import type { AnyObject } from '@eventespresso/utils';
import { ContextProvider } from './ContextProvider';

const withContext = <P extends AnyObject>(Component: React.ComponentType<P>): React.FC<P> => {
	const WrappedComponent: React.FC<P> = (props) => {
		return (
			<ContextProvider>
				<Component {...props} />
			</ContextProvider>
		);
	};

	return WrappedComponent;
};

export default withContext;
