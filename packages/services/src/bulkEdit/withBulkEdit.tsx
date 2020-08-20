import React from 'react';

import { checkFeatureFlag } from '@eventespresso/config';

import { BulkEditProvider } from './BulkEditProvider';
import type { AnyObject } from '../';

const isBulkEditEnabled = checkFeatureFlag('bulkEdit');

export const withBulkEdit = <P extends AnyObject>(Component: React.ComponentType<P>): React.FC<P> => {
	const WrappedComponent: React.FC<P> = (props) => {
		return isBulkEditEnabled ? (
			<BulkEditProvider>
				<Component {...props} />
			</BulkEditProvider>
		) : (
			<Component {...props} />
		);
	};

	return WrappedComponent;
};
