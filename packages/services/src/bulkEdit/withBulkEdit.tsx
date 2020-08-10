import React from 'react';

import { BulkEditProvider } from './BulkEditProvider';
import type { AnyObject } from '../';

export const withBulkEdit = <P extends AnyObject>(Component: React.ComponentType<P>): React.FC<P> => {
	const WrappedComponent: React.FC<P> = (props) => {
		return (
			<BulkEditProvider>
				<Component {...props} />
			</BulkEditProvider>
		);
	};

	return WrappedComponent;
};
