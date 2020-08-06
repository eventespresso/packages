import React from 'react';

import type { AnyObject } from '@eventespresso/services';
import { ContextProvider } from './ContextProvider';
import type { WithContextProps } from './types';

const withContext = <P extends AnyObject>(
	Component: React.ComponentType<P>,
	contextProps: WithContextProps,
	componentProps?: P
): JSX.Element => {
	return (
		<ContextProvider {...contextProps}>
			<Component {...componentProps} />
		</ContextProvider>
	);
};

export default withContext;
