import React from 'react';

import { ContextProvider } from './ContextProvider';
import type { AnyObject } from '@eventespresso/utils';

const withEdtrContext = <P extends AnyObject>(Component: React.ComponentType<P>): React.FC<P> => {
	const WrappedComponent: React.FC<P> = (props) => {
		return (
			<ContextProvider>
				<Component {...props} />
			</ContextProvider>
		);
	};

	return WrappedComponent;
};

export default withEdtrContext;
