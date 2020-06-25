import React from 'react';

import { ContextProvider } from './ContextProvider';
import type { WithContextProps } from './types';

const withContext = <P extends {}>(
	Component: React.ComponentType<P>,
	contextProps: WithContextProps,
	componentProps?: P
) => {
	return (
		<ContextProvider {...contextProps}>
			<Component {...componentProps} />
		</ContextProvider>
	);
};

export default withContext;
